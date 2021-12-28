package br.com.mvbos.lgj.base;

import br.com.mvbos.lgj.Ponto;

import java.io.*;
import java.util.ArrayList;

public class Rank {
    // escreve no arquivo
    private File rankSave;
    private FileWriter register;

    //lê o arquivo
    private FileInputStream rankHistory;
    private InputStreamReader leitorRank;
    private BufferedReader arquivoRank;
    private ArrayList<Jogador> rankJogadores;

    public Rank() {
        this.rankSave = new File("/home/samueo/Documents/UNIFOR - MATERIAIS E REVISÃO DE ESTUDOS/MATERIAIS EXCENSIAIS E TAREFAS/2º semestre/POO/AV3/fontes/Cap03/src/br/com/mvbos/lgj/base/rank.txt");;
    }

    public void registraJogador(String nomejogador, Ponto pontoJogador) throws IOException {
        register = new FileWriter(rankSave, true);
        register.write(nomejogador + " " + String.valueOf(pontoJogador.getPonto()) + "\n");
        register.close();
    }

    public void preencheArrayJogador() throws IOException {
        rankHistory = new FileInputStream("/home/samueo/Documents/UNIFOR - MATERIAIS E REVISÃO DE ESTUDOS/MATERIAIS EXCENSIAIS E TAREFAS/2º semestre/POO/AV3/fontes/Cap03/src/br/com/mvbos/lgj/base/rank.txt");
        leitorRank = new InputStreamReader(rankHistory);
        arquivoRank = new BufferedReader(leitorRank);
        rankJogadores = new ArrayList<Jogador>();

        while(arquivoRank.ready()) {
            String[] str = arquivoRank.readLine().split(" ");
            System.out.println(str[0]);
            System.out.println(str[1]);
            rankJogadores.add(new Jogador(str[0], Short.parseShort(str[1])));
        }
    }

    public ArrayList<Jogador> getRankJogadores() {
        return rankJogadores;
    }
}
