const API_BASE = process.env.REACT_APP_QUIZ_API_BASE || "http://localhost:4000";

const handleResponse = async (res) => {
  if (!res.ok) {
    let payload = {};
    try {
      payload = await res.json();
    } catch (error) {
      payload = {};
    }
    const message = payload.error || payload.message || "Request failed";
    throw new Error(message);
  }
  return res.json();
};

export const startQuiz = async (payload) => {
  const res = await fetch(`${API_BASE}/quiz/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
};

export const getSession = async (sessionId) => {
  const res = await fetch(`${API_BASE}/quiz/session/${sessionId}`);
  return handleResponse(res);
};

export const submitQuiz = async (payload) => {
  const res = await fetch(`${API_BASE}/quiz/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
};

export const getLeaderboard = async (limit = 20, quizNumber) => {
  const query = new URLSearchParams();
  if (limit !== undefined && limit !== null && limit !== "") {
    query.set("limit", String(limit));
  }
  if (quizNumber) {
    query.set("quizNumber", String(quizNumber));
  }

  const res = await fetch(`${API_BASE}/leaderboard?${query.toString()}`);
  return handleResponse(res);
};

export const getLeaderboardQuizzes = async () => {
  const res = await fetch(`${API_BASE}/leaderboard/quizzes`);
  return handleResponse(res);
};

export const streamLeaderboard = (onMessage, onError, quizNumber, limit) => {
  const params = new URLSearchParams();
  if (quizNumber) {
    params.set("quizNumber", String(quizNumber));
  }
  if (limit !== undefined && limit !== null && limit !== "") {
    params.set("limit", String(limit));
  }
  const query = params.toString() ? `?${params.toString()}` : "";
  const eventSource = new EventSource(`${API_BASE}/leaderboard/stream${query}`);
  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (error) {
      onMessage({ entries: [] });
    }
  };
  eventSource.onerror = () => {
    if (onError) {
      onError();
    }
  };
  return eventSource;
};

// Admin: Create question
export const createQuestion = async (payload) => {
  const res = await fetch(`${API_BASE}/quiz/admin/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      adminCode: "LongLiveAdmins01234",
      ...payload,
    }),
  });
  return handleResponse(res);
};

// Admin: Fetch all questions
export const fetchAllQuestions = async () => {
  const res = await fetch(`${API_BASE}/quiz/admin/questions?adminCode=LongLiveAdmins01234`);
  return handleResponse(res);
};

// Admin: Delete question
export const deleteQuestion = async (id) => {
  const res = await fetch(`${API_BASE}/quiz/admin/questions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      adminCode: "LongLiveAdmins01234",
    }),
  });
  return handleResponse(res);
};

// Admin: Update quiz settings
export const updateQuizSettings = async (questionCount, durationMs) => {
  const res = await fetch(`${API_BASE}/quiz/admin/settings`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      adminCode: "LongLiveAdmins01234",
      questionCount,
      durationMs,
    }),
  });
  return handleResponse(res);
};

export const advanceToNextQuiz = async () => {
  const res = await fetch(`${API_BASE}/quiz/admin/quizzes/advance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      adminCode: "LongLiveAdmins01234",
    }),
  });
  return handleResponse(res);
};
