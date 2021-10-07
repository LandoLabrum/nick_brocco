
export default function OnboardingFour({ data, update }) {
    return <div>
        <h4>We'll keep in contact.</h4>
        <p> Please make sure the information below is corect and we will be in touch soon.</p>
        <div className="break"/>
        {JSON.stringify(data)}
        </div>;
  }