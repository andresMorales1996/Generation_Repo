import java.util.Scanner;

public class UserInteractivity {
  private Scanner scanner;

  public UserInteractivity() {
    scanner = new Scanner(System.in);
  }

  public int[] testUser(String[] words, Dictionary dictionary) {
    int correctAnswers = 0;
    int incorrectAnswers = 0;

    for (String word : words) {
      System.out.println("Escribe la palabra " + word + " en inglés: ");
      String userTranslation = scanner.nextLine().trim().toLowerCase();

      if (dictionary.getTranslation(word).equals(userTranslation)) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    }

    return new int[]{correctAnswers, incorrectAnswers};
  }

  public void showResults(int correctAnswers, int incorrectAnswers) {
    System.out.println("Respuestas correctas: " + correctAnswers);
    System.out.println("Respuestas incorrectas: " + incorrectAnswers);
  }

}
