import React from 'react';
import { Link } from 'react-router-dom';

export function Success() {
  return (
    <div className="page-content" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 style={{ color: 'var(--accent-green)', fontSize: '3rem', fontFamily: 'var(--font-code)' }}>
        200 OK
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        <code>// Inquiry transmitted successfully.</code>
      </p>
      <p>Thank you for reaching out! I have received your packet and will establish a connection shortly.</p>
      
      <div style={{ marginTop: '3rem' }}>
        <Link to="/" className="cta-button">
          cd ~ / Return Home
        </Link>
      </div>
    </div>
  );
}