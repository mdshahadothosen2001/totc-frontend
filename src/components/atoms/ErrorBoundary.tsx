import React from "react";

type State = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _info: any) {
    // We could log to an external service here
  }

  handleGoBack = () => {
    try {
      const last = sessionStorage.getItem("lastValidPath");
      if (last) {
        window.location.href = last;
        return;
      }
    } catch (e) {
      // ignore
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.4)",
            zIndex: 9999,
          }}
        >
          <div
            role="alert"
            style={{
              background: "white",
              padding: 24,
              borderRadius: 8,
              maxWidth: 520,
              width: "90%",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              textAlign: "center",
            }}
          >
            <h2>Something went wrong</h2>
            <p>We've detected an unexpected error. You can try to go back or reload.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button
                onClick={this.handleGoBack}
                style={{ padding: "8px 12px", borderRadius: 6 }}
              >
                Go back
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{ padding: "8px 12px", borderRadius: 6 }}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
