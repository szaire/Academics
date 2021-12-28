package br.com.mvbos.lgj.base;

import java.awt.Graphics2D;
import java.io.IOException;

public abstract class CenarioPadrao {

	protected int altura, largura;

	public CenarioPadrao(int largura, int altura) {
		this.altura = altura;
		this.largura = largura;
	}

	public abstract void carregar();

	public abstract void descarregar() throws IOException;

	public abstract void atualizar() throws IOException;

	public abstract void desenhar(Graphics2D g);
}
