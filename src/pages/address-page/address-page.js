import { withAuthProtected } from "../../hoc/withAuthProtected";

function AddressPage() {
  return (
    <div className="row">
      <h2>Address page... </h2>
    </div>
  );
}

export default withAuthProtected(AddressPage);
