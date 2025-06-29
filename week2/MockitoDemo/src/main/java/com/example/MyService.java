package com.example;

public class MyService {
	 private ExternalApi externalApi;

	    // Constructor-based dependency injection
	    public MyService(ExternalApi externalApi) {
	        this.externalApi = externalApi;
	    }

	    public String fetchData() {
	        return externalApi.getData(); 
	    }
}

