package Music;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Functions implements MaedMusicUI {
	public int Login(Scanner sc,Statement st) throws Exception {
        System.out.print("___________________________\n");
        System.out.print("     Maed Music Login      \n");
        System.out.print("___________________________\n");
    	String query1="Select * from users";
        ResultSet rs1 = st.executeQuery(query1);
        System.out.print("\nEnter Username : ");
        String username=sc.next();
        System.out.print("Enter Password : ");
        String password=sc.next();
        int a=0;
        while(rs1.next()) {
        	if(username.equals(rs1.getString(1)) && password.equals(rs1.getString(2))) {
        		a=1;
        		break;
        	}
        }
    	while(a!=1) {
    		rs1 = st.executeQuery(query1);
    		System.out.print("\nInvalid Credentials !\n");
    		a=Login(sc,st);
    	}
    	rs1.close();
        return a;
	}
	public static void Register(Scanner sc,Statement st) throws Exception {
        System.out.print("___________________________\n");
        System.out.print("     Maed Music Register   \n");
        System.out.print("___________________________\n");
        System.out.print("\nEnter Username : ");
        String username=sc.next();
        System.out.print("Enter Password : ");
        String password=sc.next();
    	String query1="Insert into users values (\""+username+"\",\""+password+"\")";
    	st.executeUpdate(query1);
    	System.out.print("\nRegistered Successfully !\n");
	}
	public static void Music(Scanner sc,Statement st) throws Exception{
		
        int o=Chseoptn(sc);
        
        if(o==1) {
        	String query="Select * from songs";
        	ResultSet rs = st.executeQuery(query);
        	int count=1;
        	while(rs.next()) {
        		System.out.println(
        			"\nSong Number : "+count
        			+"\n_____________"
        			+"\n Song Name : "+rs.getString(1)
        			+"\n Year : "+rs.getString(2)
        			+"\n Genre : "+rs.getString(3)
        			+"\n Singers : "+rs.getString(4)
        			+"\n Composer : "+rs.getString(5)
        			+"\n URL : "+rs.getString(6));
        		count++;
        	}        	
        }
        if(o==2) {
        	System.out.print("\nSearch : ");
        	String search=sc.next();
        	System.out.println();
        	String query="Select song_name from songs where song_name like '%"+search+"%'";
        	ResultSet rs = st.executeQuery(query);
        	int count=1;
        	while(rs.next()){
        		System.out.print(count+" :) ");
        		System.out.println(rs.getString(1));
        		count++;
        	}
        }
        if(o==3) {
        	String query="Show tables where Tables_in_musiclibrary not like 'songs' AND Tables_in_musiclibrary not like 'users'";
        	ResultSet rs = st.executeQuery(query);
        	int count=1;
        	System.out.println();
        	while(rs.next()){
        		System.out.print(count+" :) ");
        		System.out.println(rs.getString(1));
        		count++;
        	}
        	System.out.print("\nChoose Playlist : ");
        	int c=sc.nextInt();
        	String query2="Show tables where Tables_in_musiclibrary not like 'songs' AND Tables_in_musiclibrary not like 'users'";
        	ResultSet rs2 = st.executeQuery(query2);
        	String pn="";
        	int count2=1;
        	while(rs2.next()){
        		if(count2==c) {
        			pn+=rs2.getString(1);
        			break;
        		}
        		count2++;
        	}
        	String query3=("Select * from "+pn);
        	ResultSet rs3 = st.executeQuery(query3);
        	int count3=1;
        	while(rs3.next()) {
        		System.out.println(
        			"\nSong Number : "+count3
        			+"\n_____________"
        			+"\n Song Name : "+rs3.getString(1)
        			+"\n Year : "+rs3.getString(2)
        			+"\n Genre : "+rs3.getString(3)
        			+"\n Singers : "+rs3.getString(4)
        			+"\n Composer : "+rs3.getString(5)
        			+"\n URL : "+rs3.getString(6));
        		count3++;
        	}
        	if(count3==1) {
        		System.out.print("\n - No Songs Present -\n");
        	}
        }
        if(o==4) {
        	String query="Show tables where Tables_in_musiclibrary not like 'songs' AND Tables_in_musiclibrary not like 'users'";
        	ResultSet rs = st.executeQuery(query);
        	int count=1;
        	while(rs.next()){
        		System.out.print(count+" :) ");
        		System.out.println(rs.getString(1));
        		count++;
        	}
        	System.out.print("\nChoose a Playlist : ");
        	int p=sc.nextInt();
        	String sname="";
        	String query2="Show tables where Tables_in_musiclibrary not like 'songs' AND Tables_in_musiclibrary not like 'users'";
        	ResultSet rs2 = st.executeQuery(query2);
        	int count2=1;
        	while(rs2.next()){
        		if(count2==p){
        			sname+=rs2.getString(1);
        			break;
        		}
        		count2++;
        	}
        	String query3="Select * from songs";
        	ResultSet rs3 = st.executeQuery(query3);
        	int count3=1;
        	while(rs3.next()) {
        		System.out.println(
        			"\nSong Number : "+count3
        			+"\n_____________"
        			+"\n Song Name : "+rs3.getString(1)
        			+"\n Year : "+rs3.getString(2)
        			+"\n Genre : "+rs3.getString(3)
        			+"\n Singers : "+rs3.getString(4)
        			+"\n Composer : "+rs3.getString(5)
        			+"\n URL : "+rs3.getString(6));
        		count3++;
        	}
        	System.out.print("\nEnter Song Number You Want To Add : ");
        	int s=sc.nextInt();
        	String query4="Select * from songs";
        	ResultSet rs4 = st.executeQuery(query4);
        	sc.nextLine();
            String so="";
            String y="";
            String g="";
            String si="";
            String c="";
            String u="";
        	int count4=1;
        	while(rs4.next()) {
        		if(count4==s) {
        			so+=rs4.getString(1);
        			y+=rs4.getString(2);
        			g+=rs4.getString(3);
        			si+=rs4.getString(4);
        			c+=rs4.getString(5);
        			u+=rs4.getString(6);
        			break;
        		}
        		count4++;
        	}
        	String query5="insert into "+sname+" values(\""+so+"\","+y+",\""+g+"\",\""+si+"\",\""+c+"\",\""+u+"\")";
        	st.executeUpdate(query5);
        	System.out.print("\nSong Added Successfully !\n");
        }
        if(o==5) {
        	System.out.print("\nEnter Playlist Name : ");
        	String p_name=sc.next();
        	String query=("Create table "+p_name+"(	song_name varchar(50),release_year int,genre varchar(50),singers varchar(50),composer varchar(50),url varchar(80),primary key(song_name))");
        	st.executeUpdate(query);
        	System.out.print("\nPlaylist Created Successfully !\n");
        }
        if(o==6) {
        	sc.nextLine();
            System.out.print("\n Song Name : ");
            String s=sc.nextLine();
            System.out.print(" Year : ");
            String y=sc.nextLine();
            System.out.print(" Genre : ");
            String g=sc.nextLine();
            System.out.print(" Singers : ");
            String si=sc.nextLine();
            System.out.print(" Composer : ");
            String c=sc.nextLine();
            System.out.print(" URL : ");
            String u=sc.nextLine();
        	String query="insert into songs values(\""+s+"\","+y+",\""+g+"\",\""+si+"\",\""+c+"\",\""+u+"\")";
        	st.executeUpdate(query);
        	System.out.print("\nSong Added Successfully !\n");
        }
        System.out.print("___________________________\n");
	}
	 @Override
	    public void Welcome() {
	        System.out.print("___________________________\n");
	        System.out.print("   Welcome to Maed Music   \n");
	        System.out.print("___________________________\n\n");
	    }

	    @Override
	    public void Menu() {
	        System.out.print("1 :) Show Available Songs\n2 :) Search Song\n3 :) Show Playlist\n4 :) Add Song to playlists\n5 :) Create Playlist\n6 :) Add song\n");
	        System.out.print("___________________________\n");
	    }

	    public static int Chseoptn(Scanner sc) {
	        System.out.print("\n Choose Your Option : ");
	        int o = sc.nextInt();
	        System.out.print("___________________________\n");
	        while (o < 1 || o > 6) {
	            System.out.print("Invalid Option !\nChoose a Valid Option : ");
	            o = sc.nextInt();
	            System.out.print("___________________________\n");
	        }
	        return o;
	    }

	    @Override
	    public int Cont(Scanner sc) {
	        System.out.print("\nDo You Want To Continue ?\n\n1 :) Yes\n2 :) No\n\nEnter Your Choice : ");
	        int l = sc.nextInt();
	        while (l != 1 && l != 2) {
	            System.out.println("Invalid Choice !!!");
	            System.out.print("___________________________\n");
	            l = Cont(sc);
	        }
	        System.out.print("___________________________\n");
	        return l;
	    }

	    @Override
	    public int Close(Scanner sc) {
	        System.out.print("\nDo You Want To Close ?\n\n1 :) Yes\n2 :) No\n\nEnter Your Choice : ");
	        int a = sc.nextInt();
	        while (a != 1 && a != 2) {
	            System.out.println("Invalid Choice !!!");
	            System.out.print("___________________________\n");
	            a = Close(sc);
	        }
	        System.out.print("___________________________\n");
	        return a;
	    }

	    @Override
	    public int Regck(Scanner sc) {
	        System.out.print("___________________________\n");
	        System.out.print("      Maed Music Home      \n");
	        System.out.print("___________________________\n");
	        System.out.print("\n1 :) Login\n2 :) Register\n\nEnter Your Choice : ");
	        int r = sc.nextInt();
	        while (r != 1 && r != 2) {
	            System.out.println("\nInvalid Choice !!!");
	            r = Regck(sc);
	        }
	        return r;
	    }
    public int App(Scanner sc,Statement st) throws Exception{
    	int r=Regck(sc);
    	if(r==1) {
    		int l=Login(sc,st);
    		while(l==1) {
    			Welcome();
    			Menu();
    			Music(sc,st);
    			l=Cont(sc);
    		}
    		int a=Close(sc);
    		return a;
    	}
    	else {
    		Register(sc,st);
    		App(sc,st);
    	}
    	return 0;
    }
}
