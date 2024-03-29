import useHabitsStore from "../store/useHabitsStore";

const SubmitForm = () => {
  const { handleSubmit, handleChange, newHabit } = useHabitsStore();
  return (
    <form onSubmit={handleSubmit}>
      <label>Add your habits</label>
      <input
        type="text"
        value={newHabit}
        onChange={handleChange}
        className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="bg-sky-700 mt-2 rounded-lg text-white p-1 hover:scale-105"
      >
        Add Habit
      </button>
    </form>
  );
};

export default SubmitForm;
