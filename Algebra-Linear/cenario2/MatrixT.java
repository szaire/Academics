public class MatrixT
{
    private double[][] T;

    public MatrixT(String eixo, double k) {
        T = new double[2][2];

        if (eixo.equals("x")) {
            T[0][0] = 1; T[0][1] = k;
            T[1][0] = 0; T[1][1] = 1;
        }
        if (eixo.equals("y")) {
            T[0][0] = 1; T[0][1] = 0;
            T[1][0] = k; T[1][1] = 1;
        }
    }

    public MatrixT(double radians) {
        T = new double[2][2];
        T[0][0] = Math.cos(radians); T[0][1] = -Math.sin(radians);
        T[1][0] = Math.sin(radians); T[1][1] = Math.cos(radians);
    }

    public MatrixT(double radians, String eixo) {
        T = new double[3][3];
        if (eixo.equals("x")) {
            T[0][0] = 1; T[0][1] = 0; T[0][2] = 0;
            T[1][0] = 0; T[1][1] = Math.cos(radians); T[1][2] = -Math.sin(radians);
            T[2][0] = 0; T[2][1] = Math.sin(radians); T[2][2] = Math.cos(radians);
        }
        if (eixo.equals("y")) {
            T[0][0] = 0; T[0][1] = Math.cos(radians); T[0][2] = -Math.sin(radians);
            T[1][0] = 1; T[1][1] = 0; T[1][2] = 0;
            T[2][0] = 0; T[2][1] = Math.sin(radians); T[2][2] = Math.cos(radians);
        }
        if (eixo.equals("z")) {
            T[0][0] = 0; T[0][1] = Math.cos(radians); T[0][2] = -Math.sin(radians);
            T[1][0] = 0; T[1][1] = Math.sin(radians); T[1][2] = Math.cos(radians);
            T[2][0] = 1; T[2][1] = 0; T[2][2] = 0;
        }
    }

    public double[][] getT() {
        return T;
    }

    public static double[][] new2dMatrix(double a, double b, double c, double d) {
        double[][] t = new double[2][2];
        t[0][0] = a; t[0][1] = b;
        t[1][0] = c; t[1][1] = d;

        return t;
    }

    public static double[][] new3dMatrix(double a, double b, double c, double d, double e, double f, double g, double h, double i) {
        double[][] t = new double[3][3];
        t[0][0] = a; t[0][1] = b; t[0][2] = c;
        t[1][0] = d; t[1][1] = e; t[1][2] = f;
        t[2][0] = g; t[2][1] = h; t[2][2] = i;

        return t;
    }
}

