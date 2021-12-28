import java.util.Arrays;

public class Vector {
    private int dim;            // dimensão = tamanho do vetor (length)
    private double[] elements;  // vetor de elementos
    private double[][] vector;    // vetor que será preenchido e retornado

    // o construtor é responsável por criar o vetor
    public Vector (int dim, double... elements) {
        if (dim == 2 || dim == 3) {
            this.dim = dim;
            this.elements = elements;
            this.vector = new double[dim][1]; //declarando as dimensões da matrix "Vector"

            // este loop é responsável por preencher a variável vector em função da quantidade de termos (dim)
            for (int i = 0; i < this.dim; i++) {
                this.vector[i][0] = this.elements[i];
            }
        }
        else {
            System.out.println("ERRO! - Vetor deve ser criado em 2 ou 3 Dimensões!");
        }
    }

    // o método "getVector" será responsável por retornar o vetor criado
    public double getVector(int i, int j) {
        return this.vector[i][j];
    }

    public int getCol() {
        return 1;
    }

    public int getRol() {
        return 1;
    }

    // altera um elemento do array pelo índice colocado
    public double[][] setVector(int index, double value) {
        for (int i = 0; i < vector.length; i++) {
            if (i == index) {
                vector[i][0] = value;
                break;
            }
        }
        return vector;
    }

    // print do vetor
    public void printVector() {
        if(this.dim == 2) {
            System.out.printf("Vetor2D: (%.2f , %.2f)", this.vector[0][0], this.vector[1][0]);
            System.out.printf("\n\n");
        }
        if(this.dim == 3) {
            System.out.printf("Vetor3D: (%.2f , %.2f , %.2f)", this.vector[0][0], this.vector[1][0], this.vector[2][0]);
            System.out.printf("\n\n");
        }
    }
}
