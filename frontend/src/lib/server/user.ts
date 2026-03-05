export const getUserStats = () => {
    return {
        totalQuizzesTaken: 42,
        averageScore: 85,
        totalQuestionsAnswered: 420,
        correctAnswers: 357,
        recentActivity: [
            { id: 1, subject: "History", score: 90, date: "2023-10-24" },
            { id: 2, subject: "Science", score: 80, date: "2023-10-23" },
            { id: 3, subject: "Math", score: 95, date: "2023-10-20" }
        ],
        availableQuizzes: [
            { id: 101, title: "World War II Overview", subject: "History", questions: 10 },
            { id: 102, title: "Cell Biology", subject: "Science", questions: 15 },
            { id: 103, title: "Algebra Basics", subject: "Math", questions: 20 },
            { id: 104, title: "JavaScript Fundamentals", subject: "Programming", questions: 12 }
        ]
    };
};
