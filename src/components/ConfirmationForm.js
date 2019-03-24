import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";

class ConfirmationForm extends React.Component {
    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <p className="card-text">
                            Please confirm your account with token you received via email
                        </p>
                        <Field name="confirmationToken" label="Confirmation token:" type="text" component={renderField} />

                        <button type="submit" className="btn btn-primary btn-big btn-block"
                                disabled={submitting}>
                            Confirm my account!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ConfirmationForm'
})(ConfirmationForm)