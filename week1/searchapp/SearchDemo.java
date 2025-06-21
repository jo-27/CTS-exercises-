package searchapp;
import java.util.Arrays;
import java.util.Comparator;
public class SearchDemo {

    public static Product linearSearch(Product[] products, String target) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(target)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String target) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int comparison = products[mid].productName.compareToIgnoreCase(target);

            if (comparison == 0) return products[mid];
            else if (comparison < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

	public static void main(String[] args) {
		 Product[] products = {
		            new Product(1, "Shoes", "Footwear"),
		            new Product(2, "Laptop", "Electronics"),
		            new Product(3, "T-shirt", "Clothing"),
		            new Product(4, "Watch", "Accessories")
		        };

		        // Linear Search
		        Product foundLinear = linearSearch(products, "Laptop");
		        System.out.println("Linear Search: " + (foundLinear != null ? foundLinear : "Not Found"));

		        // Binary Search
		        Product foundBinary = binarySearch(products, "Laptop");
		        System.out.println("Binary Search: " + (foundBinary != null ? foundBinary : "Not Found"));

	}

}
