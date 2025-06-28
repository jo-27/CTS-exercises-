package junitAAA;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Set up");
    }

    @After
    public void tearDown() {
        System.out.println("Tear down");
    }

    @Test
    public void testAdd() {
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(5, 2);
        assertEquals(3, result);
    }
}
