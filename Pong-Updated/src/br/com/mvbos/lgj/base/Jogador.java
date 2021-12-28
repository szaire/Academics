//Autoral
package br.com.mvbos.lgj.base;

public class Jogador {

    private String nome;
    private short pontuacao;

    public Jogador(String nome, short pontuacao) {
        this.nome = nome;
        this.pontuacao = pontuacao;
    }

    public String getNome() {
        return nome;
    }

    public short getPontuacao() {
        return pontuacao;
    }
}
