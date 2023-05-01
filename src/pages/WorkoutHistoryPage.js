import { checkToken } from "../utilities/users-service";


function WorkoutHistoryPage() {

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>WorkoutHistoryPage</h1>
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default WorkoutHistoryPage;
