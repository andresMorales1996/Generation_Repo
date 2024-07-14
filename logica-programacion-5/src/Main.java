public class Main {
    public static void main(String[] args) {
        Dictionary dictionary = new Dictionary();
        UserInteractivity userInteractivity = new UserInteractivity();

        String[] randomWords = dictionary.getRandomWords(5);

        int[] results = userInteractivity.testUser(randomWords, dictionary);

        userInteractivity.showResults(results[0], results[1]);

    }
}

