package br.com.mvbos.lgj;

import java.awt.Color;
import java.awt.Graphics2D;

import br.com.mvbos.lgj.base.Elemento;

public class Bola extends Elemento {

	public static final int VEL_INICIAL = 3;

	public int dirX = -1;

	public int dirY = -1;

	private float velX;

	private float velY;

	public Bola() {
		velX = velY = VEL_INICIAL;
		setAltura(10);
		setLargura(10);
		setCor(Color.WHITE);
	}

	@Override
	public void desenha(Graphics2D g) {
		if (!isAtivo())
			return;

		g.setColor(getCor());
		g.fillOval(getPx(), getPy(), getLargura(), getAltura());
	}

	public float getVelX() {
		return velX;
	}

	public float getVelY() {
		return velY;
	}

	public void setDirX(int dirX) {
		this.dirX = dirX;
	}

	public void setDirY(int dirY) {
		this.dirY = dirY;
	}

	public void incVel(float vx, float vy) {
		velX = vx;
		velY = vy;
	}

	@Override
	public void setVel(int vel) {
		velX = velY = vel;
	}

	@Override
	public int getVel() {
		return (int) velX;
	}

	public void incPx() {
		incPx((int) velX * dirX);
	}

	public void incPy() {
		incPy((int) velY * dirY);
	}

	public void inverteX() {
		dirX *= -1;
	}

	public void inverteY() {
		dirY *= -1;
	}

	// método autoral
	public void turnBlack(Graphics2D g) {
		g.setColor(Color.BLACK);
	}

	public Long calculaAngulo(int px, int py) {
		double x = px - 320;
		double y = -(py - 240);
		double tan = y / x;
		double arctan = Math.atan(tan);
		double degrees = Math.toDegrees(arctan);
		return Math.round(degrees);
	}

	public Long calculaAnguloCos(int px, int py) {
		double x = px - 320;
		double y = py - 240;
		double h = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
		System.out.println(h);
		double cos = x / h;
		double arccos = Math.acos(cos);
		double degrees = Math.toDegrees(arccos);
		return Math.round(degrees);
	}
}
