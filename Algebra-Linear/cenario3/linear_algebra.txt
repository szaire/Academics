public class LinearAlgebra {
    public static Matrix transpose(Matrix matrix) {
        // guardaremos todos os informações das matrizes em variáveis
        int rows = matrix.i;
        int cols = matrix.j;
        double[] res = new double[rows * cols]; // criaremos um vetor que irá receber os elementos do vetor

//        System.out.println("Matriz Transposta:");
        // iremos preencher esse vetor com os elementos da matriz
        for (int i = 0, n = 0; i < cols; i++) {
            for (int j = 0; j < rows; j++, n++) {
                res[n] = matrix.get(j, i);
            }
        }
        // retornaremos uma nova matriz com os elementos deste vetor,
        // entretanto, com as colunas e linhas invertidas em comparação
        // com o sentido original. Assim obeteremos a transposta.
        return new Matrix(cols, rows, res);
    }

    public static Matrix sum(Matrix A, Matrix B) {
        // guardaremos todos os informações das matrizes em variáveis
        int rA = A.i;
        int cA = A.j;
        int rB = B.i;
        int cB = B.j;

        // iremos preencher um vetor com as dimensões da matriz soma
        double[] res = new double[A.i * A.j];

        // Checaremos se as linhas da coluna A e b são iguais...
        // Se forem iguais, somaremos termo a termo e guardaremos em um vetor...
        if (rA == rB && cA == cB) {
            System.out.println("Soma:");
            for (int i = 0, n = 0; i < rA; i++) {
                for (int j = 0; j < cA; j++, n++) {
                    res[n] = A.get(i, j) + B.get(i, j);
                }
            }
            // será retornada uma nova matriz com a soma dos elementos
            return new Matrix(rA, cA, res);
        }
        // Se não forem iguais, iremos imprimir uma mensagem de erro na tela.
        else {
            System.out.println("ERRO! A ordem das matrizes deve ser a mesma!");
            return new Matrix(0, 0, 0);
        }
    }

    public static Matrix times(Matrix A, Matrix B) {
        // guardaremos todos os valores das matrizes em variáveis
        int rA = A.i;
        int cA = A.j;
        int rB = B.i;
        int cB = B.j;

        // iremos preencher um vetor com as dimensões da matriz multiplicação termo a termo
        double[] res = new double[A.i * A.j];

        // Checaremos se as linhas da coluna A e b são iguais...
        // Se forem iguais, multiplicaremos termo a termo e guardaremos em um vetor...
        if (rA == rB && cA == cB) {
            System.out.println("Multiplicação termo a termo:");
            for (int i = 0, n = 0; i < rA; i++) {
                for (int j = 0; j < cA; j++, n++) {
                    res[n] = A.get(i, j) * B.get(i, j);
                }
            }
            // será retornada uma nova matriz com a multiplicação termo a termo dos elementos
            return new Matrix(rA, cA, res);
        }
        // Se não forem iguais, iremos imprimir uma mensagem de erro na tela.
        else {
            System.out.println("ERRO! A ordem das matrizes deve ser a mesma!");
            return new Matrix(0, 0, 0);
        }
    }

    public static Matrix timesK(double k, Matrix A) {
        // guardaremos todos os valores das matrizes em variáveis
        int rA = A.i;
        int cA = A.j;

        // iremos preencher um vetor com as dimensões da matriz multiplicação termo a termo
        double[] res = new double[A.i * A.j];

        if (res.length > 0) {
//            System.out.println("Multiplicação entre termo e k:");
            for (int i = 0, n = 0; i < rA; i++) {
                for (int j = 0; j < cA; j++, n++) {
                    res[n] = A.get(i, j) * 1/k;
                }
            }
            // será retornada uma nova matriz com a multiplicação entre termos e constante dos elementos
            return new Matrix(rA, cA, res);
        }
        // Se não forem iguais, iremos imprimir uma mensagem de erro na tela.
        else {
            System.out.println("ERRO! A ordem das matrizes deve ser a mesma!");
            return new Matrix(0, 0, 0);
        }
    }

    public static Matrix dot(Matrix A, Matrix B) {
        // guardaremos todos as informações das matrizes em variáveis
        int rA = A.i;
        int cA = A.j;
        int rB = B.i;
        int cB = B.j;

        // criaremos uma variável "order" a qual será usada como parâmetro para acessar os elementos da linha da Matriz A e da coluna da Matriz B
        int order = rB;

        // criaremos um vetor para guardar a multiplicação linha x coluna
        double[] res = new double[rA * cB];

        // Como parâmetro para multiplicação de matrizes convencionais, iremos
        // comparar se o valor da coluna da matriz A é igual ao valor da linha
        // da matriz B. Se forem iguais, multiplicaremos as linhas pelas colunas...
        if (cA == rB) {
//            System.out.println("Multiplicação:");
            for (int i = 0, n = 0; i < rA; i++) {
                for (int j = 0; j < cB; j++, n++) {
                    for (int k = 0; k < order; k++) {
                        // utilizaremos um índice auxiliar "k" para acessar os elementos da linha da Matriz A e os elementos da coluna da Matriz B
                        res[n] += A.get(i, k) * B.get(k, j);
                    }
                }
            }
            return new Matrix(rA, cB, res);
        }
        // Se não forem iguais, iremos imprimir uma mensagem de erro.
        else {
            System.out.println("ERRO! A coluna da matriz A tem de ser igual à linha da matriz B!");
            return new Matrix(0, 0, 0);
        }
    }

    public static Matrix gauss(Matrix matrix) {
        int row = matrix.i;
        int col = matrix.j;
        int pivotIndex;

        System.out.println("Eliminação Gaussiana:");
        // esse for irá percorrer todos os índices da matriz até formar um pivot em cada coluna
        for (int i = 0, j = 0; i < row && j < col; i++, j++) {
            pivotIndex = i; // iremos guardar o índice do pivot em uma variável para ser usado nas operações de subtração de linha

            // esse condicional checará se o elemento na posição do pivot é igual a zero.
            // se for igual a zero, então procuraremos a linha mais próxima não-nula e faremos a troca com ela
            if (matrix.get(i, j) == 0) {
                int noZeroLine = i; // para guardarmos o índice da linha mais próxima não-nula devermos criar uma variável, neste caso, "noZeroLine" e então salvar o índice para realizarmos as operações
                for (int k = i+1; k < row; k++) {
                    double num = matrix.get(k, j);
                    if (num != 0) {
                        noZeroLine = k;
                        break;
                    }
                }
                matrix.changeRows(i, noZeroLine); // após acharmos a próxima linha não nula iremos trocar a posição delas e prosseguir com o código
            }

            // esse condicional checará se o elemento na posição pivot é diferente de 1
            // se for diferente de 1, então faremos a fatoração dos termos da linha
            if (matrix.get(i, j) != 1) {
                matrix.divideRow(i, matrix.get(i, j));
            }

            // esse condicional checará se o elemento na posição pivot é igual a 1
            // se for igual a 1, então faremos a subtração das linhas inferiores para, então, obtermos a coluna pivot
            if (matrix.get(i, j) == 1) {
                if (i < row) { // na entrada do comando checaremos se o índice da linha é menor que a quantidade de linhas, para não ocorrer erros como "acesso inexistente de índice de um array"
                    for (int k = i+1; k < row; k++) { // utilizaremos um for para procurar os elementos abaixo do pivô e fazermos a subtração
                        if (matrix.get(i, j) != 0) {
                            matrix.subRows(k, pivotIndex, matrix.get(k, j));
                        }
                    }
                }
            }
        }

        // esse sequencial serve apenas para substituir os -0 por 0, caso exista
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (matrix.get(i, j) == -0) {
                    matrix.set(i, j, 0);
                }
            }
        }
        matrix.printMatrix();
        return matrix;
    }

    // obs: o solve é utilizado apenas em matrizes de ordem NxN+1, caracterizadas
    // como matrizes ampliadas de sistemas lineares
    public static Matrix solve(Matrix matrix) {
        int row = matrix.i;
        int col = matrix.j;
        int pivotIndex;

        System.out.println("Substituição Regressiva:");
        // o sequencial em questão será responsável por fazer a substituição regressiva
        // obs: quando diminuímos os índices i e j estamos "subindo" a matriz
        for (int j = col-2; j >= 0; j--) { // o j é declarado como "col-2" pois assim poderemos acessar o índice a partir da matriz do coeficientes
            pivotIndex = j; // declaramos o índice do pivô como o índice das colunas para conseugirmos fazer as operações de subtração
            for (int i = j-1; i >= 0; i--) { // i é declarado como "j-1" pois este número representa os endereços que iremos acessar das linhas superiores
                matrix.subRows(i, pivotIndex, matrix.get(i, j));
            }
        }
        matrix.printMatrix();

        System.out.println("Soluções:");
        for (int i = 0, j = col-1; i < row; i++) {
            System.out.printf("x%d = %.2f\n", i+1, matrix.get(i, j));
        }
        
        return matrix;
    }

    public static Matrix countOneMatrix(Matrix matrix) {
        int rows = matrix.i;
        int cols = matrix.j;

        double[] res = new double[rows * cols];

        for (int i = 0; i < rows; i++) {
            int qnt1 = 0;
            for (int j = 0; j < cols; j++) {
                if (matrix.get(i, j) == 1) {
                    qnt1++;
                }
            }
            res[i] = qnt1;
        }

        return new Matrix(rows, 1, res);
    }

    public static double vectorLength (Matrix matrix) {
        double sum = 0;
        int rows = matrix.i;
        int cols = matrix.j;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                sum += Math.pow(matrix.get(i, j), 2);
            }
        }
        return Math.sqrt(sum);
    }

    public static Matrix application (Matrix A, Matrix a) {
        Matrix At = LinearAlgebra.transpose(A);
        Matrix aux = dot(At, A);
        Matrix aN = dot(aux, a);
        double k = vectorLength(aN);

        return LinearAlgebra.timesK(k, aN);
    }
}
