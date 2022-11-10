const api = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

export const APIS = {
  AUTH: {
    VERIFY_EMAIL: `${api}/email/verification-notification`,
    VERIFY_CODE: `${api}/verify-email`,
    SIGNUP: `${api}/register`,
    SIGNIN: `${api}/login`,
    FORGOT_PASSWORD: `${api}/forgot-password`,
    RESET_PASSWORD: `${api}/resetPassword`,
    LOGOUT: `${api}/logout`,
    USER: `${api}/user`,
  },
  LEARNERS: {
    SET_LEARNING_PREFERENCES: `${api}/set-learning-preferences`,
    GET_COURSES: `${api}/learners/courses`,
    GET_COURSE: (id) => `${api}/learners/course/${id}`,
    GET_RECOMMENDED: `${api}/learners/get-recommended-courses`,
    GET_POPULAR: `${api}/learners/get-popular-courses`,
    GET_FEATURED_COURSES: `${api}/learners/get-featured-courses`,
    PURCHASE_COURSE: `${api}/learners/purchase-course`,
    GET_VC_COURSES: (id) => `${api}/learners/get-vc-courses/${id}`,
    GET_MY_COURSES: `${api}/learners/get-purchased-courses`,
    GET_MY_COURSE: (id) => `${api}/learners/get-purchased-course/${id}`,
    COURSE_PURCHASED: `${api}/learners/course-purchased`,
    COURSE_PURCHASE_FAILED: `${api}/learners/course-purchase-failed`,
    SUBMIT_ANSWERS: `${api}/learners/submit-answers`
  },
  MENTORS: {
    SET_MENTORING_PREFERENCES: `${api}/creators/set-mentor-preferences`,
    CREATE_MENTORING_SESSION: `${api}/creators/create-mentoring-session`,
    CREATE_COURSE: `${api}/creators/mentor/create-courses`,
  },
  TUTORS: {
    SET_TUTORING_PREFERENCES: `${api}/creators/set-tutor-preferences`,
    ADD_COMPANY: `${api}/creators/add-company`,
    GET_COURSES: `${api}/creators/get-courses`,
    CREATE_COURSE: `${api}/creators/tutor/create-courses`,
    GET_COURSE: (id) => `${api}/creators/get-course/${id}`,
    CREATE_LECTURE: `${api}/creators/create-lecture`,
    CREATE_RESOURCE: `${api}/creators/create-resource`,
    CREATE_QUIZ: `${api}/creators/create-quiz`,
    CREATE_ASSIGNMENT: `${api}/creators/create-assignment`,
    SAVE_COURSE: `${api}/creators/save-course`,
  },
  COMPANIES: {
    SET_COMPANY_PREFERENCES: `${api}/creators/set-institue-preferences`,
  },
};
