import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem('token');

      const fetchContactData = async () => {
        try {
          const response = await fetch(`${process.env.API}/contacts/${id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          const result = await response.json();
          if (response.ok && result.success) {
            setContact(result.data);
          } else {
            setError(result.message || 'Error fetching contact data');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchContactData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Contact Details</h1>
      <div className="contact-details">
        <img src={contact.photo} alt={`${contact.name} ${contact.last_name}`} className="contact-photo" />
        <p><strong>ID:</strong> {contact.id}</p>
        <p><strong>Name:</strong> {contact.name} {contact.last_name}</p>
        <p><strong>Birth Date:</strong> {contact.birth_date}</p>
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        {contact.phone2 && <p><strong>Alternate Phone:</strong> {contact.phone2}</p>}
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>Status:</strong> {contact.status}</p>
        <p><strong>Created At:</strong> {new Date(contact.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(contact.updated_at).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ContactDetail;
