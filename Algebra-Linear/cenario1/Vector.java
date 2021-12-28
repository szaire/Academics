import java.util.Arrays;

public class Vector {
    private int dim;            // dimensão = tamanho do vetor (length)
    private double[] elements;  // vetor de elementos
    private double[] vector;    // vetor que será preenchido e retornado

    // o construtor é responsável por criar o vetor
    public Vector (int dim, double[] elements) {
        this.dim = dim;
        this.elements = elements;
        this.vector = new double[dim]; //declarando o tamanho do vetor

        // este loop é responsável por preencher a variável vector em função da quantidade de termos (dim)
        for (int i = 0; i < this.dim; i++) {
            this.vector[i] = this.elements[i];
        }
    }

    // o método "getVector" será responsável por retornar o vetor criado
    public double[] getVector() {
        return this.vector;
    }

    // altera um elemento do array pelo índice colocado
    public double[] setVector(int index, double value) {
        for (int i = 0; i < vector.length; i++) {
            if (i == index) {
                vector[i] = value;
                break;
            }
        }
        return vector;
    }

    public void printVector() {
        System.out.println(Arrays.toString(vector));
    }
}
