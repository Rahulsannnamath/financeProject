import React from 'react';


function Support() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Support & Help Center</h2>

      {/* Help Topics */}
      <div className="row text-center mb-5">
        {[
          "Account Opening",
          "KYC & Documents",
          "Funds & Withdrawals",
          "Trading & Orders",
          "Mutual Funds",
          "Console & Reports",
        ].map((topic, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{topic}</h5>
                <p className="card-text text-muted">Find FAQs and guides on {topic.toLowerCase()}.</p>
                <button className="btn btn-outline-primary btn-sm">View Articles</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Us */}
      <div className="text-center bg-light py-5 rounded">
        <h4 className="mb-3">Still need help?</h4>
        <p className="text-muted mb-4">
          If you couldn't find an answer to your query, feel free to contact our support team.
        </p>
        <a href="/contact" className="btn btn-primary px-4 py-2">Contact Us</a>
      </div>
    </div>
  );
}

export default Support;
