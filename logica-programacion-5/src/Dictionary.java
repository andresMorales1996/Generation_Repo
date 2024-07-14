import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Dictionary {
  private Map<String, String> dictionary;

  public Dictionary() {
    dictionary = new HashMap<>();
    loadDictionary();
  }

  private void loadDictionary() {
    dictionary.put("escalera", "ladder");
    dictionary.put("avion", "plane");
    dictionary.put("telefono", "phone");
    dictionary.put("book", "libro");
    dictionary.put("carro", "car");
    dictionary.put("silla", "chair");
    dictionary.put("papel", "paper");
    dictionary.put("ventana", "window");
    dictionary.put("pan", "bread");
    dictionary.put("caballo", "horse");
    dictionary.put("bicicleta", "bike");
    dictionary.put("puerta", "door");
    dictionary.put("zapatos", "shoes");
    dictionary.put("maleta", "bag");
    dictionary.put("mesa", "table");
  }

  public String[] getRandomWords(int numberOfWords) {
    List<String> keys = new ArrayList<>(dictionary.keySet());
    Collections.shuffle(keys);
    return keys.subList(0, numberOfWords).toArray(new String[0]);
  }

  public String getTranslation(String word) {
    return dictionary.get(word);
  }

}
