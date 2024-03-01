import "./ContactCard.css";

export default function ContactCard({ name, phone, email, onDeleteClick }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <button
        onClick={() => {
          onDeleteClick(phone);
        }}
      >
        Delete
      </button>
    </div>
  );
}
