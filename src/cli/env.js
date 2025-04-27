const parseEnv = () => {
    try {
        // Atrof-muhit o'zgaruvchilarini olish
        const envVariables = process.env;
    // console.log(envVariables)
        // RSS_ prefiksiga ega o'zgaruvchilarni filtrlaymiz
        const rssVariables = Object.entries(envVariables)
        .map(([key, value]) => `RSS_${key}=${value}`);
    
        // Agar hech qanday o'zgaruvchi bo'lmasa, xabar chiqaramiz
        if (rssVariables.length === 0) {
          console.log('No RSS_ variables found.');
        } else {
          // Ularni konsolga chiqaramiz
          console.log(rssVariables.join('; '));
        }
      } catch (error) {
        // Xatolik yuzaga kelsa, uni ushlab chiqamiz
        console.error('Error while processing environment variables:', error);
      }
};

parseEnv();