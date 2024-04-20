export default function User({ item }) {
  return (
    <li>
      <h2>{item.name}</h2>
      <p>
        <b>Nickname: {item.username}</b>
      </p>
      <p>📧{item.email}</p>
      <address>
        {item.address.street}, {item.address.suite}, {item.address.city},
        Zipcode: {item.address.zipcode}, Geolocation: {item.address.geo.lat},
        {item.address.geo.lng} <br /> Tel: 📳{item.phone}, Website: 🕸️
        {item.website}
      </address>
      <p>
        Company: {item.company.name}, {item.company.catchPhrase},{" "}
        {item.company.bs}
      </p>
    </li>
  );
}
