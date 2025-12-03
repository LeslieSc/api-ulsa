// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>API ULSA</h1>
      <p>Endpoints disponibles:</p>
      <ul>
        <li>/api</li>
        <li>/api/ulsa</li>
        <li>/api/saludar/&lt;nombre&gt;</li>
      </ul>
    </main>
  );
}
