package br.com.mvbos.lgj;

import java.awt.Color;
import java.awt.Graphics2D;
import java.util.Random;

import br.com.mvbos.lgj.base.CenarioPadrao;
import br.com.mvbos.lgj.base.Elemento;
import br.com.mvbos.lgj.base.Texto;
import br.com.mvbos.lgj.base.Util;

public class JogoCenario extends CenarioPadrao {

	private float inc = 0.5f;

	private Ponto pontoA, pontoB;

	public Ponto getPontoA() {
		return pontoA;
	}

	private Bola bola;

	private Elemento esquerda;

	private Elemento direita;

	private boolean reiniciarJogada;

	private final Texto textoPausa = new Texto(Ponto.fonte);

	// Modo em casa
	private int idx;

	private Bola[] bolaArr = new Bola[0];

	private Random rand;

	// Autoral
	// Modo Loucura Total
	private boolean loucuraTotal = false;
	private boolean estica = true;

	// Autoral
	// calculo da tangente (angulo)
	private Texto angulo;
	// posição da bola
	private Texto posicao;

	private double anguloBola;
	private int posicaoX;
	private int posicaoY;

	public JogoCenario(int largura, int altura) {
		super(largura, altura);

		bola = new Bola();
		esquerda = new Elemento();
		direita = new Elemento();

		pontoA = new Ponto();
		pontoB = new Ponto();
		angulo = new Texto();
		posicao = new Texto(); //debug
	}

	@Override
	public void carregar() {
		bola.setVel(Jogo.velocidade);

		pontoA.setPx(largura / 2 - 120);
		pontoA.setPy(Ponto.TAMANHO_FONTE);

		pontoB.setPx(largura / 2 + 120 - Ponto.TAMANHO_FONTE / 2);
		pontoB.setPy(Ponto.TAMANHO_FONTE);

		esquerda.setVel(5);
		esquerda.setAltura(70);
		esquerda.setLargura(5);
		esquerda.setCor(Color.WHITE);

		direita.setVel(5);
		direita.setAltura(70);
		direita.setLargura(5);
		direita.setCor(Color.WHITE);
		direita.setPx(largura - direita.getLargura());

		Util.centraliza(bola, largura, altura);
		Util.centraliza(direita, 0, altura);
		Util.centraliza(esquerda, 0, altura);
		Util.centraliza(angulo, 0, 30); //autoral
		Util.centraliza(posicao, 0, angulo.getPy() + 100); //autoral, debug

		bola.setAtivo(true);
		direita.setAtivo(true);
		esquerda.setAtivo(true);

		if (Jogo.modoEmCasa) {
			rand = new Random();
			bolaArr = new Bola[30];

			for (int i = 0; i < bolaArr.length; i++) {
				int v = rand.nextInt(3) + 1;

				bolaArr[i] = new Bola();
				bolaArr[i].setDirX(i % 2 == 0 ? -1 : 1);

				bolaArr[i].setVel(Bola.VEL_INICIAL * v);
				bolaArr[i].setAltura(bola.getAltura() * v);
				bolaArr[i].setLargura(bola.getLargura() * v);

				Util.centraliza(bolaArr[i], largura, altura);
			}
		}

		if (Jogo.modoLoucuraTotal) {
			rand = new Random();
			loucuraTotal = true;
		}
	}

	@Override
	public void descarregar() {
	}

	@Override
	public void atualizar() {

		if (Jogo.pausado)
			return;

		bola.incPx();
		bola.incPy();

		if (Jogo.controleTecla[Jogo.Tecla.CIMA.ordinal()]) {
			esquerda.incPy(esquerda.getVel() * -1);
		} else if (Jogo.controleTecla[Jogo.Tecla.BAIXO.ordinal()]) {
			esquerda.incPy(esquerda.getVel());
		}

		if (direita.getPy() + direita.getAltura() / 2 > Jogo.mouseY + direita.getVel())
			direita.incPy(direita.getVel() * -1);
		else if (direita.getPy() + direita.getAltura() / 2 < Jogo.mouseY - direita.getVel())
			direita.incPy(direita.getVel());

		validaPosicao(esquerda);
		validaPosicao(direita);

		if (reiniciarJogada) {
			reiniciarJogada = false;
			bola.inverteX();
			bola.setVel(Jogo.velocidade);
			Util.centraliza(bola, largura, altura);

		} else {
			reiniciarJogada = validaColisao(bola);
		}

		validaPosicao(bola);

		for (Bola b : bolaArr) {

			if (!b.isAtivo())
				continue;

			b.incPx();
			b.incPy();

			boolean saiu = validaColisao(b);
			if (saiu) {
				b.setAtivo(false);
				Util.centraliza(b, largura, altura);
			} else
				validaPosicao(b);

		}

		// autoral
		if (loucuraTotal) {
			if (estica) {
				bola.setVel(Bola.VEL_INICIAL * rand.nextInt(5));
				esquerda.setVel(5 + rand.nextInt(50));
				direita.setVel(5 + rand.nextInt(50));
				bola.setAltura(bola.getAltura() + 10);
				if (bola.getLargura() > 10) {
					bola.setLargura(bola.getLargura() - 10);
					esquerda.setAltura(esquerda.getAltura() - 10);
					direita.setAltura(direita.getAltura() - 10);
				}
				if (bola.getAltura() == 100 && bola.getLargura() == 10) {
					estica = false;
				}
			}
			if (!estica) {
				bola.setAltura(bola.getAltura() - 10);
				bola.setLargura(bola.getLargura() + 10);
				esquerda.setAltura(esquerda.getAltura() + 10);
				direita.setAltura(direita.getAltura() + 10);
				if (bola.getAltura() == 10 && bola.getLargura() == 100) {
					estica = true;
				}
			}
		}

	}

	@Override
	public void desenhar(Graphics2D g) {
		// Desenha linha de fundo
		for (int i = 0; i < altura; i += 20) {
			g.setColor(Color.WHITE);
			g.drawRect(largura / 2 - 2, i, 4, 10);
		}

		pontoA.desenha(g);
		pontoB.desenha(g);

//		 depurarColisao(esquerda, g);
//		 depurarColisao(direita, g);

		bola.desenha(g);

		for (Bola b : bolaArr) {
			b.desenha(g);
		}

		esquerda.desenha(g);
		direita.desenha(g);

		if (Jogo.pausado) {
			textoPausa.desenha(g, "PAUSA", largura / 2 - Ponto.TAMANHO_FONTE, altura / 2);
		}

		// Autoral
		// mostra angulo da bola
		angulo.desenha(g, "O angulo da bola é: " + Math.abs(anguloBola) + "º");
		//debug:
//		posicao.desenha(g, "Posição da bola: (" + Integer.toString(posicaoX) + "," + Integer.toString(posicaoY) + ")");
	}

	private boolean validaColisao(Bola b) {
		boolean saiu = false;

		if (Util.colide(esquerda, b)) {
			rebate(esquerda, b);
			anguloBola = bola.calculaAngulo(bola.getPx(), bola.getPy());

		} else if (Util.colide(direita, b)) {
			rebate(direita, b);
			anguloBola = bola.calculaAngulo(bola.getPx(), bola.getPy());

		} else if (b.getPx() < 0 || b.getPx() + b.getLargura() > largura) {

			saiu = true;

			if (b.getPx() < 0) {
				pontoB.add();
				anguloBola = 0;
			}
			else {
				pontoA.add();
				anguloBola = 0;
			}

		} else if (b.getPy() <= 0 || b.getPy() + b.getAltura() >= altura) {
			// Colisao no topo ou base da tela
			b.inverteY();
		}

		return saiu;
	}

	public void depurarColisao(Elemento el, Graphics2D g2d) {
		int p = el.getPx() == 0 ? 6 : -6;
		int x1 = el.getPx() + p;

		g2d.setColor(Color.RED);
		g2d.drawLine(x1, el.getPy(), el.getPx() + p, el.getPy() + el.getAltura() / 3);

		g2d.setColor(Color.GREEN);
		g2d.drawLine(x1, el.getPy() + el.getAltura() - el.getAltura() / 3, el.getPx() + p, el.getPy() + el.getAltura());
	}

	public void rebate(Elemento raquete, Bola bola) {
		float vx = bola.getVelX();
		float vy = bola.getVelY();
		posicaoX = bola.getPx() - 320;
		posicaoY = bola.getPy() - 240;

		if (bola.getPy() < raquete.getPy() + raquete.getAltura() / 3) {
			bola.setDirY(-1);

			vx += inc;
			vy += inc;

			if (bola.getPy() < raquete.getPy()) {
				vy += inc;
			}

		} else if (bola.getPy() > raquete.getPy() + raquete.getAltura() - raquete.getAltura() / 3) {
			bola.setDirY(1);

			vx += inc;
			vy += inc;

			if (bola.getPy() + bola.getAltura() > raquete.getPy() + raquete.getAltura()) {
				vy += inc;
			}

		} else {
			vx += inc;
			vy = 1;
		}

		bola.inverteX();
		bola.incVel(vx, vy);

		if (bolaArr.length > 0) {
			if (idx < bolaArr.length) {
				bolaArr[idx++].setAtivo(true);

			} else {
				idx = 0;
			}
		}

	}

	private void validaPosicao(Elemento el) {
		if (el.getPy() < 0)
			el.setPy(0);
		else if (el.getPy() + el.getAltura() > altura)
			el.setPy(altura - el.getAltura());
	}
}
