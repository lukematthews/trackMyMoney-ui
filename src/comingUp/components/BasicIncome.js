export const BasicIncome = (props) => {
  const saveIncome = () => {};

  return (
    <Form
      onSubmit={saveIncome}
      initialValues={label}
      mutators={{
        ...arrayMutators,
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop },
        },
        submitting,
        pristine,
        form,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          // next payday // frequency // Label // amount
        </form>
      )}
    />
  );
};
