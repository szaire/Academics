public class Main
{
    public static void main(String[] args)
    {
        double[] matrix = {
                0, 1, 1, 0,
                0, 0, 1, 0,
                1, 0, 0, 1,
                1, 0, 0, 0
        };
        Matrix mat = new Matrix(4, 4, matrix);
        mat.printMatrix();
        Matrix matAdj = LinearAlgebra.countOneMatrix(mat);
        matAdj.printMatrix();
        double len = LinearAlgebra.vectorLength(matAdj);
        Matrix a0 = LinearAlgebra.timesK(len, matAdj);
        a0.printMatrix();
        Matrix a1 = LinearAlgebra.application(mat, a0);
        a1.printMatrix();
        Matrix a2 = LinearAlgebra.application(mat, a1);
        a2.printMatrix();
        Matrix a3 = LinearAlgebra.application(mat, a2);
        a3.printMatrix();
        Matrix a4 = LinearAlgebra.application(mat, a3);
        a4.printMatrix();
    }
}

