public class Matrix {
    public int i;               // atributo que guardará o índice das linhas
    public int j;               // atributo que guardará o índice das colunas
    private double[][] matrix;  // é útil para preenchermos nossa matriz no construtor e manipular ela com getters ou setters

    // este construtor é responsável pela criação da matriz
    public Matrix(int rows, int cols, double... elements)
    {
        this.i = rows;
        this.j = cols;
        this.matrix = new double[this.i][this.j];

        // o loop será necessário e responsável por preencher nossa matriz em função dos atributos i e j
        for (int i = 0, n = 0; i < this.i; i++) {
            for (int j = 0; j < this.j; j++, n++) {
                matrix[i][j] = elements[n];
            }
        }
    }

    // O método get será responsável por retornar um elemento da matriz em função dos parâmetros i e j
    public double get(int i, int j) {
        return this.matrix[i][j];
    }

    public void set(int i, int j, double value) {
        this.matrix[i][j] = value;
    }

    public void printMatrix() {
        for (int i = 0; i < this.i; i++) {
            for (int j = 0; j < this.j; j++) {
                System.out.printf("%.2f\t", matrix[i][j]);
            }
            System.out.printf("\n");
        }
        System.out.println();
    }

    // Foram necessárias a criação de 3 métodos para fazer as operações
    // com matrizes ampliadas de sistemas lineares

    // targetRow = índice da linha destino;
    // auxRow = líndice da inha que deve estar na posição da targetRow.

    // Troca a posição das linhas elemento por elemento
    public void changeRows(int targetRow, int auxRow) {
        for (int j = 0; j < this.j; j++) { // utilizamos um for para acessar os índices dos elementos das colunas
            double n1 = this.get(targetRow, j); // variável que guardarará os valores do elemento da linha destino
            double n2 = this.get(auxRow, j); // variável que guardará os valores da linha auxiliar
            this.set(targetRow, j, n2); // substituição dos elementos da linha destino
            this.set(auxRow, j, n1); // substituição dos elementos da linha auxiliar
        }
    }

    // Divide elemento por elemento da linha por uma razão estabelecida
    public void divideRow(int targetRow, double reason) {
        for (int j = 0; j < this.j; j++) { // acessa o índice dos elementos da coluna de uma matriz
            double num = this.get(targetRow, j);
            this.set(targetRow, j, num / reason); // troca os elementos da linha pela divisão de cada elemento de uma linha por uma razão
        }
    }

    // Subtrai uma linha por outra linha com auxílio de uma razão "mul"
    public void subRows(int targetRow, int auxRow, double mul) {
        for (int j = 0; j < this.j; j++) { // acessa o índice dos elementos da coluna de uma matriz
            double n1 = this.get(targetRow, j); // variável que guardarará os valores do elemento da linha que será reduzida
            double n2 = this.get(auxRow, j); // variável que guardará os valores da linha auxiliar
            this.set(targetRow, j, n1 - n2 * mul); // troca os elementos da linha pela divisão de cada elemento de uma linha por uma subtração
        }
    }
}

