
class Basics {
    public static void main(String[] args) {

        // ######## IF CONDITION ######

        /*
         * System.out.println("main");
         * if (false)
         * ;
         * if (true)
         * ;
         * System.out.println("if2-block");
         * System.out.println("end-block");
         * 
         * 
         * if(true) {
         * System.out.println("if body");
         * }
         * System.out.println("In te Middle");
         * else {
         * System.out.println("else body");
         * }
         * No statements in between
         * 
         * 
         * if(true) {
         * System.out.println("if");
         * }
         * else
         * System.out.println("else body");
         * System.out.println("else body");
         * 
         * 
         * if (true) {
         * System.out.println("if");
         * } else;
         * System.out.println("else body");
         * System.out.println("else body");
         * 
         * 
         * if (true) {
         * System.out.println("if");
         * } else
         * ;
         * {
         * System.out.println("else body");
         * System.out.println("else body");
         * }
         * 
         * 
         * if (true);
         * {
         * System.out.println("if");
         * } else
         * {
         * System.out.println("else body");
         * System.out.println("else body");
         * }
         * 
         * 
         * if (true);
         * else
         * {
         * System.out.println("else body");
         * System.out.println("else body");
         * }
         * 
         * 
         * if (false)
         * ;
         * else {
         * System.out.println("else body");
         * System.out.println("else body");
         * }
         */

        // ####### for loop ######
        /*
         * System.out.println("main begin");
         * if(false) {
         * System.out.println("r");
         * } else {
         * System.out.println("h");
         * if(false) {
         * System.out.println("a");
         * } else {
         * if(true) {
         * System.out.println("p");
         * }
         * System.out.println("e");
         * }
         * 
         * }
         * System.out.println("g");
         * 
         * 
         * System.out.println("main");
         * if(true) {
         * System.out.println("if");
         * } else if(true)
         * {
         * System.out.println("else-if");
         * } else if(true) {
         * System.out.println("else-else-if");
         * }
         * 
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if(true) {
         * System.out.println("if1-begin");
         * if(true) {
         * System.out.println("if2");
         * } else {
         * System.out.println("else1");
         * }
         * } else {
         * System.out.println("else2");
         * }
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if(true)
         * if(true) {
         * System.out.println("if2");
         * } else {
         * System.out.println("else1");
         * }
         * else {
         * System.out.println("else2");
         * }
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if(true)
         * if(true)
         * System.out.println("if2");
         * else
         * System.out.println("else1");
         * else
         * System.out.println("else2");
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if (false)
         * if (true)
         * System.out.println("if2");
         * else
         * System.out.println("else1");
         * else
         * System.out.println("else2");
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if(true) {
         * System.out.println("if1");
         * if(true) {
         * System.out.println("if2");
         * if(true) {
         * System.out.println("if3");
         * } else {
         * System.out.println("else1");
         * }
         * System.out.println("a");
         * 
         * }
         * else {
         * System.out.println("else2");
         * }
         * System.out.println("b");
         * 
         * }
         * else {
         * System.out.println("else3");
         * }
         * System.out.println("c");
         * 
         * 
         * System.out.println("main");
         * if(true)
         * //System.out.println("if1");
         * if(true)
         * if(true)
         * System.out.println("if3");
         * else
         * System.out.println("else3");
         * else
         * System.out.println("else2");
         * //System.out.println("if1-end");
         * else
         * System.out.println("else1");
         * System.out.println("end");
         * 
         * 
         * System.out.println("main");
         * if (false)
         * // System.out.println("if1");
         * if (true)
         * if (true)
         * System.out.println("if3");
         * else
         * System.out.println("else3");
         * else
         * System.out.println("else2");
         * // System.out.println("if1-end");
         * else
         * System.out.println("else1");
         * System.out.println("end");
         * 
         * 
         * int i=10;
         * int j;
         * if(i<20)
         * j=500;
         * else
         * j=800;
         * System.out.println(i+", "+j);
         * 
         * 
         * int i=10;
         * int j=i<20?500:800;
         * System.out.println(i+", "+j);
         */

        // ############# For Loop ############
        /*
         * System.out.println("main");
         * int i=1;
         * for(;i<=5;) {
         * System.out.println(i++);
         * }
         * 
         * for (; ;) {
         * System.out.println(i++);
         * }
         * 
         * for (int i=1, j=10; i<=5; i++, j--) {
         * System.out.println(i+", "+j);
         * }
         * 
         * for (int i = 1, j = 10; j >= 3; i++, j--) {
         * System.out.println(i + ", " + j);
         * }
         * 
         * // two booleans can be combined using loical operatr only
         * 
         * for (int i = 1, j = 10; i<=4 || j >= 3; i++, j--) {
         * System.out.println(i + ", " + j);
         * }
         * 
         * System.out.println("main");
         * int i;
         * 
         * for (i = 1, System.out.println("init"); test(i);
         * System.out.println("before: "+i), i++, System.err.println("after: "+i)) {
         * System.out.println(i);
         * }
         * System.out.println("main end");
         * 
         * 
         * System.out.println("main");
         * int i;
         * for(i=1;i<=4;i++)
         * System.out.println(i);
         * System.out.println("a");
         * System.out.println("b");
         * System.out.println("end");
         * 
         * System.out.println("main");
         * int i;
         * for (i = 1; i <= 4; i++);
         * System.out.println(i);
         * System.out.println("a");
        a: for (int i = 0; i <= 3; i++) {
            System.out.println("first");
            b: for (int j = 0; j <=5; j++) {
                System.out.println("sec");
                if(j==2) break a;
            }
        } 
        
        */

        // ########## WHILE LOOP ##########
        /*
         * System.out.println("main");
         * int i=1;
         * while (i<=4) {
         * System.out.println(i++);
         * }
         * System.out.println("end at " + i);
         * 
         * System.out.println("main");
         * int i = 1;
         * while (i++ <= 4) {
         * System.out.println(i);
         * }
         * System.out.println("end at " + i);
         * 
         * System.out.println("main");
         * int i = 1;
         * while (i <= 4) {
         * System.out.println(i);
         * i++;
         * }
         * System.out.println("end at " + i);
         * 
         * System.out.println("main");
         * int i = 1;
         * while (i <= 4);
         * {
         * System.out.println(i);
         * i++;
         * }
         * System.out.println("end at " + i);
         * 
         * System.out.println("main");
         * int i = 1;
         * while (i++ <= 4)
         * {
         * System.out.println(i);
         * i++;
         * }
         * System.out.println("end at " + i);
         * 
         * System.out.println("main");
         * int i = 1;
         * while (i++ <= 4);
         * {
         * System.out.println(i);
         * i++;
         * }
         * System.out.println("end at " + i);
         */

        // ####### DO WHILE ######
        /*
         * int i = 10;
         * do
         * {
         * System.out.println(i);
         * i++;
         * } while(i<5)
         * System.out.println("end at " + i);
         * 
         * // Compilation error i is local to do block
         * do
         * {
         * int i = 10;
         * System.out.println(i);
         * i++;
         * } while(i<5);
         * System.out.println("end at " + i);
         * do {
         * int i = 10;
         * System.out.println(i);
         * i++;
         * } while (i < 5);
         * System.out.println("end at " + i);
         */

        // ######### Methods #######
        /*
         * System.out.println("main begin");
         * test();
         * System.out.println("main end");
         
         System.out.println("main begin");
         System.out.println(test1());
         System.out.println("main end");
        */
        
        int i=1;
        int j = test(++i);
        System.out.println(i+","+j);
        
    }

    /*
    static boolean test(int i) {
    boolean b1 = (i <=5);
    System.out.println("boolean results for "+i+" is "+b1);
    return b1;
    }
    */

    /*
    public static void test() {
    System.out.println("test begin");
    if(true) return;
    System.out.println("test end");
    }
    */

    /* public static int test1() {
        System.out.println("test begin");
        if (true)  
            return true;
        System.out.println("test end");
        return false;
    } */

    static int test(int i) {
        
        return i++;
    }

    
}