public class Transformations {
    public static Vector translate2D(Vector vector, double dx, double dy) {
        int x = 0;
        int y = 1;
        double[] res = new double[2];
        res[0] = vector.getVector(x, 0) + dx;
        res[1] = vector.getVector(y, 0) + dy;
        System.out.println("Translação 2D:");
        System.out.printf("d: (x+%.1f , y+%.1f)\n", dx, dy);
        System.out.printf("ponto de origem: (%.1f , %.1f)\n", dx, dy);

        return new Vector(2, res);
    }
    public static Vector translate3D(Vector vector, double dx, double dy, double dz) {
        int x = 0;
        int y = 1;
        int z = 2;
        double[] res = new double[3];
        res[x] = vector.getVector(x, 0) + dx;
        res[y] = vector.getVector(y, 0) + dy;
        res[z] = vector.getVector(z, 0) + dz;
        System.out.println("Translação 3D:");
        System.out.printf("d: (x+%.1f , y+%.1f , z+%.1f)\n", dx, dy, dz);
        System.out.printf("ponto de origem: (%.1f , %.1f , %.1f)\n", dx, dy, dz);

        return new Vector(3, res);
    }
    public static Vector rotation2D(Vector vector, double angle) {
        double radians = Math.toRadians(angle);
        double[][] T = new MatrixT(radians).getT();

        double[] res = new double[2];

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }

        System.out.println("Rotação 2D:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.printf("%.2f\t", T[i][j]);
            }
            System.out.println();
        }

        return new Vector(2, res);
    }
    public static Vector rotation3DX(Vector vector, double angle) {
        double radians = Math.toRadians(angle);
        double[][] T = new MatrixT(radians, "x").getT();

        double[] res = new double[3];

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }

        System.out.println("Rotação 3D (no eixo X):");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.printf("%.2f\t", T[i][j]);
            }
            System.out.println();
        }

        return new Vector(3, res);
    }
    public static Vector rotation3DY(Vector vector, double angle) {
        double radians = Math.toRadians(angle);
        double[][] T = new MatrixT(radians, "y").getT();

        double[] res = new double[3];

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }

        System.out.println("Rotação 3D (no eixo Y):");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.printf("%.2f\t", T[i][j]);
            }
            System.out.println();
        }

        return new Vector(3, res);
    }
    public static Vector rotation3DZ(Vector vector, double angle) {
        double radians = Math.toRadians(angle);
        double[][] T = new MatrixT(radians, "z").getT();

        double[] res = new double[3];

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }

        System.out.println("Rotação 3D (no eixo Z):");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.printf("%.2f\t", T[i][j]);
            }
            System.out.println();
        }

        return new Vector(3, res);
    }
    public static Vector reflection2DX(Vector vector) {
        double[] res = new double[2];
        double[][] T = MatrixT.new2dMatrix(1,0,0,-1);

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Reflexão 2D no eixo X:");
        return new Vector(2, res);
    }
    public static Vector reflection2DY(Vector vector) {
        double[] res = new double[2];
        double[][] T = MatrixT.new2dMatrix(-1,0,0,1);

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Reflexão 2D no eixo Y:");
        return new Vector(2, res);
    }
    public static Vector reflection3DX(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(1,0,0,-1,0,0,0,0,-1);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Reflexão 3D no eixo X:");
        return new Vector(3, res);
    }
    public static Vector reflection3DY(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(-1,0,0,1,0,0,0,0,-1);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Reflexão 3D no eixo Y:");
        return new Vector(3, res);
    }
    public static Vector reflection3DZ(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(-1,0,0,-1,0,0,0,0,1);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Reflexão 3D no eixo Z:");
        return new Vector(3, res);
    }
    public static Vector projection2DX(Vector vector) {
        double[] res = new double[2];
        double[][] T = MatrixT.new2dMatrix(1,0,0,0);

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Projeção 2D no eixo X:");
        return new Vector(2, res);
    }
    public static Vector projection2DY(Vector vector) {
        double[] res = new double[2];
        double[][] T = MatrixT.new2dMatrix(0,0,0,1);

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Projeção 2D no eixo Y:");
        return new Vector(2, res);
    }
    public static Vector projection3DX(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(1,0,0,0,0,0,0,0,0);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Projeção 3D no eixo X:");
        return new Vector(3, res);
    }
    public static Vector projection3DY(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(0,0,0,1,0,0,0,0,0);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Projeção 3D no eixo Y:");
        return new Vector(3, res);
    }
    public static Vector projection3DZ(Vector vector) {
        double[] res = new double[3];
        double[][] T = MatrixT.new3dMatrix(0,0,0,0,0,0,1,0,0);

        for (int i = 0; i < 3; i++) {
            for (int k = 0; k < 3; k++) {
                res[i] += T[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.println("Projeção 3D no eixo Z:");
        return new Vector(3, res);
    }
    public static Vector shearingX(Vector vector, double kx) {
        double[] res = new double[2];
        double[][] Tx = new MatrixT("x", kx).getT();

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += Tx[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.printf("Cisalhamento no eixo X (kx = %.2f):\n", kx);
        return new Vector(2, res);
    }
    public static Vector shearingY(Vector vector, double ky) {
        double[] res = new double[2];
        double[][] Ty = new MatrixT("y", ky).getT();

        for (int i = 0; i < 2; i++) {
            for (int k = 0; k < 2; k++) {
                res[i] += Ty[i][k] * vector.getVector(k, 0);
            }
        }
        System.out.printf("Cisalhamento no eixo Y (kx = %.2f):\n", ky);
        return new Vector(2, res);
    }

}

