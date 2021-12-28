package br.com.mvbos.lgj;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;
import java.awt.image.BufferedImage;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JPanel;

import br.com.mvbos.lgj.base.CenarioPadrao;

public class Jogo extends JFrame {

	/**
	 * Marcus Vinicius Becker
	 */
	private static final long serialVersionUID = 1L;

	private static final int FPS = 1000 / 20;

	private static final int JANELA_ALTURA = 480;

	private static final int JANELA_LARGURA = 640;

	private JPanel tela;

	private Graphics2D g2d;

	private BufferedImage buffer;

	private CenarioPadrao cenario;

	// Autoral
    private Ponto pontoSalvo;

	// Autoral - tentativa de state machine
	private boolean entrouRank;

	// Autoral
	private boolean registrouNome = false;

	public enum Tecla {
		CIMA, BAIXO, ESQUERDA, DIREITA, BA, BB, RANK
	}

	public static int mouseY;

	public static boolean[] controleTecla = new boolean[Tecla.values().length];

	public static void liberaTeclas() {
		for (int i = 0; i < controleTecla.length; i++) {
			controleTecla[i] = false;
		}
	}

	private void setaTecla(int tecla, boolean pressionada) {
		switch (tecla) {
		case KeyEvent.VK_UP:
			controleTecla[Tecla.CIMA.ordinal()] = pressionada;
			break;
		case KeyEvent.VK_DOWN:
			controleTecla[Tecla.BAIXO.ordinal()] = pressionada;
			break;
		case KeyEvent.VK_LEFT:
			controleTecla[Tecla.ESQUERDA.ordinal()] = pressionada;
			break;
		case KeyEvent.VK_RIGHT:
			controleTecla[Tecla.DIREITA.ordinal()] = pressionada;
			break;

		case KeyEvent.VK_ESCAPE:
			controleTecla[Tecla.BB.ordinal()] = pressionada;
			break;

		// Menu Rank (autoral):
		case KeyEvent.VK_R:
			controleTecla[Tecla.RANK.ordinal()] = pressionada;
			break;

		case KeyEvent.VK_SPACE:
		case KeyEvent.VK_ENTER:
			controleTecla[Tecla.BA.ordinal()] = pressionada;
		}
	}

	public static boolean pausado;

	public static int velocidade;

	public static boolean modoNormal;

	public static boolean modoEmCasa;

	public static boolean modoLoucuraTotal;

	public Jogo() {
		this.addKeyListener(new KeyListener() {

			@Override
			public void keyTyped(KeyEvent e) {
			}

			@Override
			public void keyReleased(KeyEvent e) {
				setaTecla(e.getKeyCode(), false);
			}

			@Override
			public void keyPressed(KeyEvent e) {
				setaTecla(e.getKeyCode(), true);
			}
		});

		buffer = new BufferedImage(JANELA_LARGURA, JANELA_ALTURA, BufferedImage.TYPE_INT_RGB);

		g2d = buffer.createGraphics();

		tela = new JPanel() {
			private static final long serialVersionUID = 1L;

			@Override
			public void paintComponent(Graphics g) {
				g.drawImage(buffer, 0, 0, null);
			}
		};

		tela.addMouseMotionListener(new MouseMotionListener() {

			@Override
			public void mouseMoved(MouseEvent e) {
				mouseY = e.getY();
			}

			@Override
			public void mouseDragged(MouseEvent e) {
			}
		});

		getContentPane().add(tela);

		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setResizable(false);
		setSize(JANELA_LARGURA, JANELA_ALTURA);

		setVisible(true);
		tela.repaint();

	}

	private void carregarJogo() {
		cenario = new InicioCenario(tela.getWidth(), tela.getHeight());
		cenario.carregar();
	}

	public void iniciarJogo() throws IOException {
		long prxAtualizacao = 0;

		while (true) {
			if (System.currentTimeMillis() >= prxAtualizacao) {

				g2d.setColor(Color.BLACK);
				g2d.fillRect(0, 0, JANELA_LARGURA, JANELA_ALTURA);

				if (controleTecla[Tecla.BA.ordinal()]) {
					// Pressionou espaço ou enter
					if (cenario instanceof InicioCenario) {
						cenario.descarregar();
						cenario = new JogoCenario(tela.getWidth(), tela.getHeight());
						cenario.carregar();

					} else if (cenario instanceof JogoCenario) {
						Jogo.pausado = !Jogo.pausado;
					}

					liberaTeclas();

				} else if (controleTecla[Tecla.RANK.ordinal()]) {
					// Pressionou "R"
					// Autoral
					if (cenario instanceof InicioCenario) {
						cenario.descarregar();
						cenario = new RankCenario(tela.getWidth(), tela.getHeight());
						cenario.carregar();
						((RankCenario) cenario).preencheArrayTela();
					}

					liberaTeclas();

				} else if (controleTecla[Tecla.BB.ordinal()]) {
					// Pressionou ESQ
					// Autoral
					if (cenario instanceof JogoCenario) {
						cenario.descarregar();
                        pontoSalvo = ((JogoCenario) cenario).getPontoA();
						cenario = new RankCenario(tela.getWidth(), tela.getHeight());
                        ((RankCenario) cenario).setPontoJogador(pontoSalvo);
						cenario.carregar();
						((RankCenario) cenario).salvarRank();
					} else if (cenario instanceof RankCenario) {
						cenario.descarregar();
						cenario = new InicioCenario(tela.getWidth(), tela.getHeight());
						cenario.carregar();
					}

					liberaTeclas();
				}

				if (cenario == null) {
					g2d.setColor(Color.WHITE);
					g2d.drawString("Carregando...", 20, 20);

				} else {
					cenario.atualizar();
					cenario.desenhar(g2d);
				}

				tela.repaint();
				prxAtualizacao = System.currentTimeMillis() + FPS;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		Jogo jogo = new Jogo();
		jogo.carregarJogo();
		jogo.iniciarJogo();
	}

}
