package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // 1. Load Spring application context
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("applicationContext.xml");
        
        // 2. Get the BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);
        
        // 3. Test dependency injection
        String result = bookService.getBookDetails("101");
        System.out.println(result);
    }
}
