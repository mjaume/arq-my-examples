/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package uy.edu.ort.arquitectura.EntidadesSB;

import java.util.Collection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import uy.edu.ort.arquitectura.Entidades.Usuario;
import uy.edu.ort.arquitectura.PersistenciaSB.PersistenciaUsuarioLocal;

import javax.ejb.EJB;

/**
 *
 * @author martinarzuaga
 */
@Stateless
public class UsuarioSB implements UsuarioSBLocal {
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    
    @EJB
    private PersistenciaUsuarioLocal per;
    
    @Override
    public void agregar(Usuario ent) {
        try {
            per.create(ent);
            //log.insertarLog(true, TipoTransaccion.Agregar, "Se agrego correctamente la entidad", null, -1, -1);
        } catch (Exception e) {
            //log.insertarLog(false, TipoTransaccion.Agregar, "Error al agregar la entidad", e, -1, -1);
            //throw new ExceptionLogica("Error desconocido.", e);
        }
    }
    
    @Override
    public void actualizar(Usuario ent) {
        try {
            per.edit(ent);
      //  } catch (ExceptionPersistencia e) {
            //throw new ExceptionLogica("No se puede actualizar la entidad.", e);
        } catch (Exception e) {
            //throw new ExceptionLogica("Error desconocido.", e);
        }
    }

    @Override
    public List<Usuario> findAll() {
        try {
            return per.findAll();
        } catch (Exception e) {
            //throw new ExceptionLogica("Error desconocido.", e);
            return null;
        }
    }

    @Override
    public Usuario findByID(Integer id) {
        try {
            return per.findById(id);
        } catch (Exception ex) {
            //Logger.getLogger(UsuarioSB.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    
}
