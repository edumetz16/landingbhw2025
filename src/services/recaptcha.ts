const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise');

export async function createAssessment(
  token = "action-token",
) {
  const recaptchaAction = process.env.NEXT_PUBLIC_RECAPTCHA_ACTION!;
  const recaptchaKey = "6LfCY-EqAAAAAP69R4c0yuy6y_Zu7mhMhM7rqPM1";
  const projectID = process.env.GCP_PROJECT_ID!;
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const client = new RecaptchaEnterpriseServiceClient({
    credentials: {
      private_key: process.env.SA_PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
      client_email: process.env.SA_CLIENT_EMAIL!,
    },
  });

  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = ({
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  });

  const [ response ] = await client.createAssessment(request);

  // Check if the token is valid.
  if (!response.tokenProperties.valid) {
    console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason: string) => {
      console.log(reason);
    });

    return response.riskAnalysis.score;
  } else {
    console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
    return null;
  }
}