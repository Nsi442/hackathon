// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentSection = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Welcome to the Mental Health Support Platform</h1>
        <p className="lead">
          Your mental well-being is our priority. Explore resources, find
          therapists, and track your mood.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Educational Resources</h5>
              <p className="card-text">
                Access educational articles and videos on mental health.
              </p>
              <a href="/resource" className="btn btn-primary">
                Explore Resources
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Therapist Finder</h5>
              <p className="card-text">
                Find mental health professionals in your area.
              </p>
              <a href="/therapist-finder" className="btn btn-success">
                Find Therapists
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mood Tracker</h5>
              <p className="card-text">
                Log your daily mood and view progress over time.
              </p>
              <a href="/mood-tracker" className="btn btn-warning">
                Track Your Mood
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Latest Articles</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">How to Cope with Anxiety</h5>
                <p className="card-text">
                  Learn strategies to manage anxiety in everyday life.
                </p>
                <a href="/article1" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  The Importance of Mental Health Awareness
                </h5>
                <p className="card-text">
                  Discover why mental health awareness is vital in society.
                </p>
                <a href="/article2" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Self-Care Tips for a Healthier Mind
                </h5>
                <p className="card-text">
                  Explore self-care tips to improve mental well-being.
                </p>
                <a href="/article3" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
