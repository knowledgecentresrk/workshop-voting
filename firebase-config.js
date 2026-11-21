// ==============================================================================
// FIREBASE CONFIGURATION
// Configured for parenting-workshop-a3276
// ==============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyAyOiKrpl_VSVqEJMSIt5Er3qAvMwwnQuA",
  authDomain: "parenting-workshop-a3276.firebaseapp.com",
  databaseURL: "https://parenting-workshop-a3276-default-rtdb.firebaseio.com",
  projectId: "parenting-workshop-a3276",
  storageBucket: "parenting-workshop-a3276.firebasestorage.app",
  messagingSenderId: "143116408950",
  appId: "1:143116408950:web:91a4002a2f06471cdfe757",
  measurementId: "G-P3MNED8C0Q"
};

// Polling Question & Options Configuration
const POLL_DATA = {
    question: "One thing my child does that drives me crazy is ________",
    subtitle: "Parenting & Early Childhood Discovery Workshop",
    options: [
        { id: 1, text: "My child refuses to eat.", icon: "🥣" },
        { id: 2, text: "My child throws tantrums in public.", icon: "😤" },
        { id: 3, text: "My child says NO to everything.", icon: "🙅‍♂️" },
        { id: 4, text: "My child doesn't sit in one place.", icon: "🏃‍♂️" },
        { id: 5, text: "My child wants my phone all the time.", icon: "📱" },
        { id: 6, text: "My child doesn't share toys.", icon: "🧸" },
        { id: 7, text: "My child keeps asking WHY.", icon: "❓" }
    ]
};
