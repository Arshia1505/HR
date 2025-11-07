'use client';
import React, { useState, useEffect } from 'react';

/**
 * Props:
 * - show (bool)
 * - onClose () => void
 * - team (object) - optional; used for display
 * - recipients (string[]) - list of emails
 * - onSend ({ teamId, subject, message, recipients }) => Promise
 * - templates (array of { id, name, subject, message })
 */
export default function WarningModal({ show, onClose, team, recipients = [], onSend, templates = [] }) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(templates[0]?.id ?? null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  // load template into fields when selected or modal opens
  useEffect(() => {
    if (!show) return;
    const tpl = templates.find(t => t.id === selectedTemplateId) || templates[0];
    if (tpl) {
      setSubject(tpl.subject);
      setMessage(tpl.message);
      setSelectedTemplateId(tpl.id);
    } else {
      // defaults
      setSubject(team ? `Warning from ${team.name} Team` : 'Warning from HR');
      setMessage(team ? `Dear team member,\n\nThis is an important warning from the ${team.name} team.\n\nRegards,\nHR` : 'Dear team member,');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, selectedTemplateId, templates, team]);

  if (!show) return null;

  async function handleSend() {
    if (!subject.trim() || !message.trim()) {
      alert('Please provide both subject and message.');
      return;
    }
    if (!recipients || recipients.length === 0) {
      alert('No recipients selected.');
      return;
    }

    if (!confirm(`Send to ${recipients.length} recipients?`)) return;

    setSending(true);
    try {
      await onSend({
        teamId: team?.id,
        subject: subject.trim(),
        message: message.trim(),
        recipients,
      });
      onClose();
    } catch (err) {
      console.error('Send failed', err);
      alert(err?.message || 'Failed to send warnings');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={() => !sending && onClose()} />
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Send Warning {team ? `— ${team.name}` : ''}</h3>
          <button className="text-gray-500" onClick={() => !sending && onClose()}>✕</button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Template</label>
            <select
              className="mt-1 block w-full rounded border px-3 py-2"
              value={selectedTemplateId ?? ''}
              onChange={(e) => setSelectedTemplateId(e.target.value)}
            >
              <option value="">— None / Blank —</option>
              {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
            <div className="text-xs text-gray-500 mt-1">Selecting a template pre-fills subject & message (you can edit).</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              className="mt-1 block w-full rounded border px-3 py-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full rounded border px-3 py-2 min-h-[140px] whitespace-pre-wrap"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your warning message here..."
            />
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">{recipients.length} recipients</div>
              <div className="flex gap-2">
                <button type="button" className="text-sm px-2 py-1 bg-gray-100 rounded" onClick={() => setPreviewOpen(p=>!p)}>Preview</button>
                <button type="button" className="text-sm px-2 py-1 bg-blue-600 text-white rounded" onClick={handleSend} disabled={sending}>
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>

          {previewOpen && (
            <div className="mt-2 p-3 border rounded bg-gray-50">
              <div className="text-sm text-gray-600 font-medium mb-2">Preview</div>
              <div className="border rounded p-3 bg-white">
                <div className="font-semibold">{subject}</div>
                <pre className="whitespace-pre-wrap mt-2 text-sm text-gray-700">{message}</pre>
                <div className="text-xs text-gray-500 mt-3">Recipients: {recipients.length}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
