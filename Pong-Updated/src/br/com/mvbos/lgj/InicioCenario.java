package br.com.mvbos.lgj;

import java.awt.*;

import br.com.mvbos.lgj.base.CenarioPadrao;
import br.com.mvbos.lgj.base.Menu;
import br.com.mvbos.lgj.base.Texto;
import br.com.mvbos.lgj.base.Util;

public class InicioCenario extends CenarioPadrao {

	public InicioCenario(int largura, int altura) {
		super(largura, altura);
	}

	private Bola bola;

	private Menu menuModo;

	private Menu menuVeloc;

	private Texto menuSelecaoRank;

	@Override
	public void carregar() {
		bola = new Bola();

		menuModo = new Menu("Modo");
		menuModo.addOpcoes("Normal", "Em casa", "Loucura Total slk");

		menuVeloc = new Menu("Vel.");
		menuVeloc.addOpcoes("Normal", "Rápido", "Lento");

		menuSelecaoRank = new Texto();

		Util.centraliza(bola, largura, altura);
		Util.centraliza(menuModo, largura, altura);
		Util.centraliza(menuVeloc, largura, altura);

		menuModo.setPy(menuModo.getPy() + 100);
		menuVeloc.setPy(menuModo.getPy() + menuModo.getAltura());

		bola.setAtivo(true);
		menuModo.setSelecionado(true);
		menuModo.setAtivo(true);
		menuVeloc.setAtivo(true);
	}

	@Override
	public void descarregar() {
		Jogo.velocidade = bola.getVel();
		Jogo.modoNormal = menuModo.getOpcaoId() == 0;
		Jogo.modoEmCasa = menuModo.getOpcaoId() == 1;
		Jogo.modoLoucuraTotal = menuModo.getOpcaoId() == 2;
	}

	@Override
	public void atualizar() {
		if (Jogo.controleTecla[Jogo.Tecla.CIMA.ordinal()] || Jogo.controleTecla[Jogo.Tecla.BAIXO.ordinal()]) {
			if (menuModo.isSelecionado()) {
				menuModo.setSelecionado(false);
				menuVeloc.setSelecionado(true);

			} else {
				menuModo.setSelecionado(true);
				menuVeloc.setSelecionado(false);
			}
		} else if (Jogo.controleTecla[Jogo.Tecla.ESQUERDA.ordinal()] || Jogo.controleTecla[Jogo.Tecla.DIREITA.ordinal()]) {

			boolean esqueda = Jogo.controleTecla[Jogo.Tecla.ESQUERDA.ordinal()];
			menuModo.trocaOpcao(esqueda);
			menuVeloc.trocaOpcao(esqueda);

			if (menuVeloc.getOpcaoId() == 0) {
				bola.setVel(Bola.VEL_INICIAL);

			} else if (menuVeloc.getOpcaoId() == 1) {
				bola.setVel(Bola.VEL_INICIAL * 2);

			} else {
				bola.setVel(Bola.VEL_INICIAL / 2);
			}

		}

		Jogo.liberaTeclas();

		// Controle da bola
		bola.incPx();
		bola.incPy();

		if (Util.colide(menuModo, bola) || Util.colide(menuVeloc, bola)) {
			bola.inverteX();
			bola.inverteY();
		}

		if (bola.getPx() < 0 || bola.getPx() + bola.getLargura() > largura) {
			// Colisao nas laterais da tela
			bola.inverteX();

		} else if (bola.getPy() <= 0 || bola.getPy() + bola.getAltura() >= altura) {
			// Colisao no topo ou base da tela
			bola.inverteY();
		}

		if (bola.getPy() < 0)
			bola.setPy(0);
		else if (bola.getPy() + bola.getAltura() > altura)
			bola.setPy(altura - bola.getAltura());
	}

	@Override
	public void desenhar(Graphics2D g) {
		bola.desenha(g);
		menuModo.desenha(g);
		menuVeloc.desenha(g);
		menuSelecaoRank.desenha(g, "Para Acessar o Rank do Jogo, pressione a tecla R", largura / 5, 20);

	}

}
