import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { endpoints } from "../../redux/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import FormStateToRedux from "../../finalForm/FormStateToRedux";

export const IncomeForm = () => {
  const validate = () => {};
  let disabled = false;

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const onSubmit = (values) => {
    let parent_id = idFromName(values.parent_id);
    let valueClone = { ...values };
    valueClone.parent_id = parent_id;
    window.alert(JSON.stringify(valueClone, 0, 2));
    dispatch(endpoints.updateLabel.initiate(valueClone));
  };

  const dispatch = useDispatch();
  let label = {
    ...useSelector((state) => {
      return state.labelConfigPage.label
        ? state.labelConfigPage.label
        : state.labelConfigPage;
    }),
  };

  console.log(label.labelType);

  return (
    <Form
      initialValues={label}
      subscription={{ submitting: true, pristine: true, values: true }}
      onSubmit={onSubmit}
      validate={validate}
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
        values,
        form,
      }) => (
        <form onSubmit={handleSubmit}>
          <fieldset disabled={disabled}>
            <FormStateToRedux form="label"></FormStateToRedux>
            <MDBBtn>Work it out!</MDBBtn>
            <div className="form-group mb-3">
              <label htmlFor="labelName">How often do you get paid?</label>
              <Field
                className="form-control"
                name="frequency"
                component="select"
                placeholder="Frequency"
              >
                <option>Number of days</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </Field>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="dayOfMonth">
                If you get paid every x number of days how may days is it. Or
                for monthly payments, what day of the month is it?
              </label>
              <Field
                name="dayOfMonth"
                className="form-control"
                component="select"
              >
                {[...Array(31)].map((item, index) => {
                  return <option>{index + 1 + nth(index + 1)}</option>;
                })}
              </Field>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="labelName">
                If you're getting paid weekly or fortnightly, what day of the
                week is it?
              </label>
              <Field
                className="form-control"
                name="dayOfWeek"
                component="select"
                placeholder="Frequency"
              >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </Field>
            </div>
          </fieldset>
        </form>
      )}
    ></Form>
  );
};
