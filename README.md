# Questionnaire Answers:
    1. In the scenario of a tight release schedule, I would first focus on thorougly reviewing and understanding the specifications and business logic of the object in testing. I would create as few as possible test cases and tests, which achieve the highest percentage coverage of the component/system. 

    2. For multi-application support I would rely on creating Playwright custom fixtures and use them in parameterized tests, which would make maintenance easier in the long run. In this case introducing a new application into a set of tests I would only have to create additional fixtures (if necessary) and add new parameters to the tests.

    3. I think documentation is important, so I would start by re-reviewing the spec, in order to verify whether a feature was misunderstood or missed entirely. If this is the case, I would implement an even more thorough review of the documentation or a re-review once the test cases are complete, in order to validate if anything was missed.
    
    It is also possible that decisions were made in private conversations or in work item comments, so I would look at all related tasks (if viable) to confirm if this is the case and the QA team was not made aware. If a decision was made, I would suggest the documentation be updated ASAP or at the very least, the QA team be made fully aware of the decision.   

    I would contact the developer/development team that worked on the feature in order to understand the cause of the failure. 

    4. I would ensure that all information regarding the product is communicated in an understandable way and that it reaches all affected members of the project. If an issue is detected with a component, I would encourage the tester and developer to discuss the cause of the defect, how and why the actual outcome differs from the expected outcome. I would encourage frequent discussions among the QA team/s, as exchanging experience and discussing best programming and QA practices is crucial for the development of personal skills.   

<!-- 
    * The test cases are structured as follows: 
    [Test case step(1, 2, etc...)]. [Action to be performed] | [Expected result. "-" if no expected result]
-->
# Test Cases - Positive
Verify the correct elements are displayed in the "User Profile Creation" page
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Verify the "First Name (mandatory)" title and input field are displayed | -
    3. Verify the "Last Name (mandatory)" title and input field are displayed | -
    4. Verify the "Email (mandatory)" title and input field are displayed | -
    5. Verify the "Password (mandatory)" title and input field are displayed | -
    6. Verify the "Confirm Password (mandatory)" title and input field are displayed | -
    7. Verify the "Gender (optional)" title and input field are displayed | -
    8. Verify the "Date of Birth (optional)" title and input field are displayed | -
    9. Verify the "Phone Number (optional)" title and input field are displayed | -
    10. Verify the "Address (optional)" title and input field are displayed | -
    11. Verify the "LinkedIn URL (optional)" title and input field are displayed | -
    12. Verify the "GitHub URL (optional)" title and input field are displayed | -

Verify it is possible to create a new user profile - Mandatory parameters only
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., P@ssw0rd) | -
    6. Input the same value from step 5 into the "Confirm Password" field | -
    7. Do not input or select any data in the following fields: "Gender", "Date of Birth", "Phone Number", "Address", "LinkedIn URL", "GitHub URL" | - 
    8. Select the "Submit" button | A "Success!" message should be displayed, the user should be created

Verify it is possible to create a new user profile - All parameters 
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    6. Input the same value from step 5 into the "Confirm Password" field | -
    7. Select one of the following radio buttons in the "Gender" field: "Male", "Female", "Prefer not to say" | -
    8. Input a string value into the "Date of Birth" field of a valid date in the format YYYY-MM-DD (e.g., 1990-01-01) OR select the icon in the 
    9. Input a ten digin number in the "Phone Number" field (e.g., 1234567890)
    10. Input a string value into the "Address" field (e.g., "123 Main St, Apt 1")
    11. Input a string value into the "LinkedIn URL" field of a valid LinkedIn profile URL (e.g., https://www.linkedin.com/in/johnwick)
    12. Input a string value into the "GitHub URL" field of a valid GitHub profile URL (e.g., https://www.github.com/johnwick)
    13. Select the "Submit" button | A "Success!" message should be displayed, the user should be created

# Test Cases - Negative
Verify it is not possible to create a user without inputting data into the "First Name" field
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Leave the "First Name" input field blank | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    6. Input the same value from step 5 into the "Confirm Password" field | -
    7. Select the "Submit" button | An error message should be displayed, that reads "First name must be filled out". The user should not be created. It should be possible to close the error message by selecting the "OK" button, correct the mistake and continue with user creation.

Verify it is not possible to create a user without inputting data into the "Last Name" field
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Leave the "Last Name" input field blank | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    6. Input the same value from step 5 into the "Confirm Password" field | -
    7. Select the "Submit" button | An error message should be displayed, that reads "Last name must be filled out". The user should not be created. It should be possible to close the error message by selecting the "OK" button, correct the mistake and continue with user creation.

Verify it is not possible to create a user without inputting data into the "Email" field
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Leave the "Email" input field blank | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    6. Input the same value from step 5 into the "Confirm Password" field | -
    7. Select the "Submit" button | An error message should be displayed, that reads "Email must be filled out". The user should not be created. It should be possible to close the error message by selecting the "OK" button, correct the mistake and continue with user creation.

Verify it is not possible to create a user without inputting data into the "Password" field
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Leave the "Password' field blank | -
    6. Input a value into the "Confirm Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    7. Select the "Submit" button | An error message should be displayed, that reads "Passwords do not match". The user should not be created. It should be possible to close the error message by selecting the "OK" button, correct the mistake and continue with user creation.

Verify it is not possible to create a user without inputting data into the "Confirm Password" field
    1. Navigate to the following page: https://qa-assessment.pages.dev/ | The "User Profile Creation" page should be loaded and displayed successfully
    2. Input a string value into the "First Name" input field of a valid first name (e.g., "John") | -
    3. Input a string value into the "Last Name" input field of a valid first name (e.g., "Wick") | -
    4. Input a string value into the "Email" input field of a valid email address (e.g., "john.wick@example.com") | -
    5. Input a value into the "Password" field which contains letters, numbers and special symbols (e.g., "P@ssw0rd") | -
    6. Leave the "Confirm Password' field blank | -
    7. Select the "Submit" button | An error message should be displayed, that reads "Confirm password must be filled out". The user should not be created. It should be possible to close the error message by selecting the "OK" button, correct the mistake and continue with user creation.

# Bugs
<!-- When creating bugs, I usually attach videos or images to the work item -->
BUG#1 [SECURITY - User Profile Creation page] Super user password hardcoded and visible in the HTML body
    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Right click on a blank space on the page and select the "Inspect" option
        3. In the openned browser developer console, collapse the "body" element in the HTML structure
        4. Observe the "adminPassword" element

    Expected result:
    No sensitive user data should be visible in the URL, HTML structure, payloads or responses.

    Actual result:
    Super user password is hardcoded and visible in the HTML.


BUG#2 [User Profile Creation page] Error on creation attempt - "LinkedIn URL" field is mandatory
    VIDEO ATTACHED

    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Input valid data in the following fields: "First Name", "Last Name", "Email", "Password", "Confirm" Password"
        3. Leave the "LinkedIn URL" field blank
        4. Select the "Submit" button
        5. Observe the displayed error 

    Expected result:
    It should be possible to create a user without inputting or selecting data in the "Gender", "Date of Birth", "Phone Number", "Address", "LinkedIn URL" and "GitHub URL" fields

    Actual result:
    When data is only input in the "First Name", "Last Name", "Email", "Password" and "Confirm" Password" mandatory fields, an error is displayed that reads "LinkedIn must be filled out". User creation without inputting data in the "LinkedIn URL" field is not possible.


BUG#3 [User Profile Creation page] No URL validation in the "LinkedIn URL" and "GitHub URL" fields
    VIDEO ATTACHED

    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Input valid data in the following fields: "First Name", "Last Name", "Email", "Password", "Confirm" Password"
        3. Input a random URL into the "LinkedIn URL" input field, that is not connected to the LinkedIn platform (e.g., https://www.youtube.com, https://www.randomWebsite.com)
        4. Input a random URL into the "GitHub URL" input field, that is not connected to the GitHub platform (e.g., https://www.youtube.com, https://www.randomWebsite.com)
        4. Select the "Submit" button
        5. Observe

    Expected result:
    It should not be possible to input a URL into the "LinkedIn URL" or "GitHub URL" fields that does not contain the respective domain name. An error should be displayed if the provided URL is invalid. User creation with an invalid URL should not be possible.

    Actual result:
    It is possible to create a user with incorrect provided URL's in the "LinkedIn URL" and/or "GitHub URL" input fields.


BUG#4 [User Profile Creation page] Incorrect message displayed when no data is input into the "Last Name" field
    VIDEO ATTACHED

    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Input valid data in the following fields: "First Name", "Email", "Password", "Confirm" Password"
        3. Leave the "Last Name" field blank
        4. Select the "Submit" button
        5. Observe the displayed error

    Expected result:
    When attempting to create a user without inputting a value in the "Last Name" field, an error should be displayed that reads "Last name must be filled out". Creating a user without inputting a correct value in the "Last Name" field should not be possible.

    Actual result:
    When attempting to create a user without inputting a value in the "Last Name" field,an error is displayed that reads "*First* name must be filled out". 

BUG#5 [User Profile Creation page] User creation success message not displayed for long enough
    VIDEO ATTACHED

    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Input valid data in the following fields: "First Name", "Last Name", "Email", "Password", "Confirm" Password"
        3. Select the "Submit" button
        4. Observe

    Expected result:
    A clear message should be displayed on screen if user creation has been successful.

    Actual result:
    The message displayed after successful user creation is displayed very briefly, before the page has been reset. 


BUG#5 [User Profile Creation page] Incorrect date format in the "Date of Birth" field
    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Observe the date format placeholder value of the "Date of Birth" field
        3. Select the calendar icon in the "Date of Birth" input field and select a valid date
        4. Observe the displayed date format in the "Date of Birth" input field

    Expected result:
    The date format in the "Date of Birth" input field should be YYYY-MM-DD. 

    Actual result:
    The date format in the "Date of Birth" input field is MM-DD-YYYY.


BUG#6 [User Profile Creation page] Formatting and spelling issues
    Steps to reproduce:
        1. Navigate to the following page: https://qa-assessment.pages.dev/
        2. Observe the spelling in the following field titles: "Date *ofBirth* (optional)" , "Address (*optioal*)"
        3. Observe all of the field titles and compare to the "Gender" field title formatting
        4. Observe the "Male", "Female" and "Prefer not to say" radio buttons and titles in the "Gender" field

    Expected result:
    Formatting should be consistent for all page componens. Correct spelling should be maintained throughout the platform's UI.

    Actual result:
    There are spelling mistakes in the "Date of Birth" and "Address" fields. Only the "Gender" field's title is in bold.The radio buttons of the "Gender" field are not centered to their respective titles.