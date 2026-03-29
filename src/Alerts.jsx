function Alerts({ temperature, voltage }) {
  return (
    <div className="Alerts-card">
      <h3>⚠ Alerts</h3>

      {temperature > 40 && (
        <div className="alert-item danger">
          High Temperature Warning!
        </div>
      )}

      {voltage < 10 && (
        <div className="alert-item warning">
          Low Voltage Warning!
        </div>
      )}
    </div>
  );
}

export default Alerts;