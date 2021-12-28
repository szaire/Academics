// Autoral
package br.com.mvbos.lgj;

import java.awt.*;
import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.Scanner;

import br.com.mvbos.lgj.base.*;

import javax.swing.*;

public class RankCenario extends CenarioPadrao {

    public RankCenario(int largura, int altura) {
        super(largura, altura);
        System.out.println("Você está no Rank!");
    }

    private Bola bola;

    private Texto rankNomeJogador;

    private Texto rankTexto;

    private Texto rankHistory;

    private Rank rank;

    // Autoral!
    private Ponto pontoJogador;

    public void setPontoJogador(Ponto pontoJogador) {
        this.pontoJogador = pontoJogador;
    }

    private Scanner nomeJogador;

    public void carregar() {
        bola = new Bola(); // não mexe!

        rankNomeJogador = new Texto();

        rank = new Rank();

        nomeJogador = new Scanner(System.in);

        rankTexto = new Texto();

        rankHistory = new Texto();

        Util.centraliza(bola, largura, altura); // não mexe!
        Util.centraliza(rankNomeJogador, largura, altura);
        Util.centraliza(rankTexto, largura, altura);
        Util.centraliza(rankHistory, largura, altura);

        rankNomeJogador.setPx(0);
        rankNomeJogador.setPy(20);

        rankTexto.setPx(0);
        rankTexto.setPy(rankNomeJogador.getPy() + 20);

        rankHistory.setPy(rankTexto.getPy() + 20);

        bola.setAtivo(true); // não mexe!
    }

    @Override
    public void descarregar() {}

    @Override
    public void atualizar() {
        Jogo.liberaTeclas();
    }

    @Override
    public void desenhar(Graphics2D g) {
        bola.desenha(g);
        bola.setPy(1000);
        bola.setPx(1000);
        rankNomeJogador.desenha(g, "Aperte ESC para sair");
        rankTexto.desenha(g, "RANK:");
        for (int i = 0; i < rank.getRankJogadores().size(); i++) {
            rankHistory.desenha(g, mostraRankTexto(i), 0, 60 + (i * 20));
        }
    }

    public void salvarRank() throws IOException {
        System.out.print("Digite seu nome para registrar no Rank: ");
        String nome = JOptionPane.showInputDialog("Digite seu nome para salvar no rank: ");
        rank.registraJogador(nome, pontoJogador);
        rank.preencheArrayJogador();
        organizaArrayList();
    }

    public void preencheArrayTela() throws IOException {
        rank.preencheArrayJogador();
        organizaArrayList();
    }

    public void organizaArrayList() {
        Collections.sort(rank.getRankJogadores(), (Jogador j1, Jogador j2) -> {
            if (j1.getPontuacao() > j2.getPontuacao()) {
                return -1;
            } else if (j1.getPontuacao() < j2.getPontuacao()) {
                return +1;
            }
            return 0;
        });
        for (int i = rank.getRankJogadores().size() - 1; i > 9; i--) {
            rank.getRankJogadores().remove(i);
        }
    }

    public String mostraRankTexto(int index) {
        return rank.getRankJogadores().get(index).getNome() + " : " + rank.getRankJogadores().get(index).getPontuacao();
    }
}