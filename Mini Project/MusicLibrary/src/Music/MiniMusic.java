package Music;

import java.util.*;
import java.sql.*;

public class MiniMusic{

    public static void main(String[] args) throws Exception{
    	Scanner sc=new Scanner(System.in);
    	
    	String url="jdbc:mysql://localhost:3306/musiclibrary";
    	String userName="root";
    	String passWord="5b9t65stu3";
    	
    	Connection con = DriverManager.getConnection(url,userName,passWord);
    	Statement st = con.createStatement();
    	
    	Functions functions=new Functions();
        
    	int a=2;
    	while(a==2) {
    		a=functions.App(sc,st);
    		if(a==1) {
    			System.out.println("\nClosing Maed Music ...");
    		}
    	}
    	System.out.println("Application Closed.");
    	System.out.print("___________________________\n");

        sc.close();
        con.close();
    }
}