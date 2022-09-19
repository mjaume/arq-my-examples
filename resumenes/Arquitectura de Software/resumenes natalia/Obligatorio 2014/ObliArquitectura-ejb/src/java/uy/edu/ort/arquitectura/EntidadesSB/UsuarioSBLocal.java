/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package uy.edu.ort.arquitectura.EntidadesSB;

import java.util.Collection;
import java.util.List;
import javax.ejb.Local;
import uy.edu.ort.arquitectura.Entidades.Usuario;

/**
 *
 * @author martinarzuaga
 */
@Local
public interface UsuarioSBLocal {
    
    public void agregar(Usuario ent);
    
    public void actualizar(Usuario ent);
    
    public List<Usuario> findAll();
    
    public Usuario findByID(Integer id);
    
}
