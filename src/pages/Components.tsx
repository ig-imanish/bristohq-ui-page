import Sidebar from "../components/sidebar/Sidebar";

export default function Components() {
  return (
    <div className="docs-page" style={{ display: 'flex' }}>

      <Sidebar />
      <div style={{ padding: '2rem' }}>
        <h1>Documentation</h1>
        <p>Welcome to the BristoHQ UI documentation.</p>
      </div>
    </div>
  );
}

